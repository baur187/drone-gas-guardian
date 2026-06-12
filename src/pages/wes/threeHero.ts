import * as THREE from "three";

const AMBER = new THREE.Color("#ffa645");
const CYAN = new THREE.Color("#53d8e8");
const DIM = new THREE.Color("#3a4a63");

// Well trajectory: vertical section → kickoff → build → horizontal lateral
function buildWellCurve() {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 5.2, 0),
    new THREE.Vector3(0, 3.4, 0),
    new THREE.Vector3(0.05, 1.6, 0),
    new THREE.Vector3(0.3, -0.4, 0.1),
    new THREE.Vector3(1.0, -2.2, 0.3),
    new THREE.Vector3(2.4, -3.4, 0.5),
    new THREE.Vector3(4.4, -4.0, 0.6),
    new THREE.Vector3(6.6, -4.15, 0.6),
  ]);
}

export function initHeroScene(canvas: HTMLCanvasElement): () => void {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.innerWidth < 768;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x060a12, 9, 24);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0.6, 0.4, 11.5);

  const root = new THREE.Group();
  root.position.x = isMobile ? 0 : 1.4;
  root.rotation.y = -0.5;
  scene.add(root);

  const disposables: { dispose: () => void }[] = [];
  const track = <T extends { dispose: () => void }>(d: T): T => {
    disposables.push(d);
    return d;
  };

  // --- Well trajectory tube ---
  const curve = buildWellCurve();
  const tubeGeo = track(new THREE.TubeGeometry(curve, 160, 0.035, 10, false));
  const tubeMat = track(
    new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.85 })
  );
  root.add(new THREE.Mesh(tubeGeo, tubeMat));

  // Ghost "plan" trajectory, slightly offset — the plan vs actual motif
  const ghostPts = curve.getPoints(120).map((p) => new THREE.Vector3(p.x * 1.04, p.y, p.z - 0.35));
  const ghostGeo = track(new THREE.BufferGeometry().setFromPoints(ghostPts));
  const ghostMat = track(
    new THREE.LineDashedMaterial({ color: DIM, dashSize: 0.18, gapSize: 0.12, transparent: true, opacity: 0.7 })
  );
  const ghost = new THREE.Line(ghostGeo, ghostMat);
  ghost.computeLineDistances();
  root.add(ghost);

  // --- Casing rings along the vertical section ---
  const ringMat = track(
    new THREE.MeshBasicMaterial({ color: 0x6b7d99, transparent: true, opacity: 0.5 })
  );
  [4.6, 3.4, 2.2, 1.0].forEach((y, i) => {
    const r = 0.34 - i * 0.05;
    const geo = track(new THREE.TorusGeometry(r, 0.012, 8, 40));
    const ring = new THREE.Mesh(geo, ringMat);
    ring.position.y = y;
    ring.rotation.x = Math.PI / 2;
    root.add(ring);
  });

  // --- Surface grid ---
  const grid = new THREE.GridHelper(14, 28, 0x2a3a55, 0x1a2740);
  grid.position.y = 5.2;
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.35;
  track(grid.geometry);
  track(grid.material as THREE.Material);
  root.add(grid);

  // --- Drill bit marker ---
  const bitGeo = track(new THREE.SphereGeometry(0.085, 16, 16));
  const bitMat = track(new THREE.MeshBasicMaterial({ color: AMBER }));
  const bit = new THREE.Mesh(bitGeo, bitMat);
  root.add(bit);
  const bitGlowGeo = track(new THREE.SphereGeometry(0.2, 16, 16));
  const bitGlowMat = track(
    new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.22 })
  );
  const bitGlow = new THREE.Mesh(bitGlowGeo, bitGlowMat);
  root.add(bitGlow);

  // --- Data packets streaming up the wellbore (bit → surface, 1 Hz telemetry motif) ---
  const PACKETS = 14;
  const packetGeo = track(new THREE.BufferGeometry());
  packetGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(PACKETS * 3), 3));
  const packetMat = track(
    new THREE.PointsMaterial({ color: CYAN, size: 0.09, transparent: true, opacity: 0.95, sizeAttenuation: true })
  );
  const packets = new THREE.Points(packetGeo, packetMat);
  root.add(packets);
  const packetOffsets = Array.from({ length: PACKETS }, (_, i) => i / PACKETS);

  // --- Ambient particle field (formation noise) ---
  const COUNT = isMobile ? 450 : 1100;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  const cloudGeo = track(new THREE.BufferGeometry());
  cloudGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const cloudMat = track(
    new THREE.PointsMaterial({ color: 0x4a5c7d, size: 0.025, transparent: true, opacity: 0.7 })
  );
  const cloud = new THREE.Points(cloudGeo, cloudMat);
  scene.add(cloud);

  // --- Interaction state ---
  const mouse = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  const resize = () => {
    const w = canvas.clientWidth || canvas.parentElement?.clientWidth || 1;
    const h = canvas.clientHeight || canvas.parentElement?.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  let raf = 0;
  const clock = new THREE.Clock();

  const render = () => {
    const t = clock.getElapsedTime();

    // bit drills forward and restarts
    const bitU = (t * 0.045) % 1;
    const bitPos = curve.getPointAt(bitU);
    bit.position.copy(bitPos);
    bitGlow.position.copy(bitPos);
    bitGlow.scale.setScalar(1 + 0.25 * Math.sin(t * 4));

    // telemetry packets travel from the bit back to surface
    const arr = packetGeo.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < PACKETS; i++) {
      const u = bitU * (1 - ((packetOffsets[i] + t * 0.12) % 1));
      const p = curve.getPointAt(Math.max(0, Math.min(1, u)));
      arr.setXYZ(i, p.x, p.y, p.z);
    }
    arr.needsUpdate = true;

    root.rotation.y = -0.5 + Math.sin(t * 0.08) * 0.12 + mouse.x * 0.08;
    root.rotation.x = mouse.y * 0.035;
    cloud.rotation.y = t * 0.012;

    renderer.render(scene, camera);
  };

  if (prefersReduced) {
    render();
  } else {
    const loop = () => {
      render();
      raf = requestAnimationFrame(loop);
    };
    loop();
  }

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener("pointermove", onPointer);
    disposables.forEach((d) => d.dispose());
    renderer.dispose();
  };
}
