import * as THREE from 'three';

/** Svelte action to initialize a Three.js space scene with stars, sun, and revolving idli */
export function threeSpaceScene(node) {
  const container = node;
  const scene = new THREE.Scene();
  // Match the app’s dark-theme background color for space
  const bgColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--background')
    .trim();
  scene.background = new THREE.Color(bgColor);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Stars field - pentagon-shaped stars
  const starCount = 1000;
  const pentagonGeometry = new THREE.CircleGeometry(0.5, 5);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const stars = new THREE.InstancedMesh(pentagonGeometry, starMaterial, starCount);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < starCount; i++) {
    dummy.position.set(
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200
    );
    const scale = Math.random() * 0.5 + 0.1;
    dummy.scale.set(scale, scale, scale);
    dummy.updateMatrix();
    stars.setMatrixAt(i, dummy.matrix);
  }
  scene.add(stars);

  // Sun mesh
  const sunGeometry = new THREE.SphereGeometry(1, 32, 16);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);

  // Idli pivot for orbiting
  const pivot = new THREE.Object3D();
  scene.add(pivot);

  // Idli mesh (stretched sphere)
  const idliGeometry = new THREE.SphereGeometry(0.3, 16, 8);
  idliGeometry.scale(1, 1.3, 1);
  idliGeometry.computeVertexNormals();
  // Create a simple sponge-like bump texture procedurally
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  // fill background white for pure white idli
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  // draw random darker speckles for spongy texture
  for (let i = 0; i < size * size * 0.05; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const radius = Math.random() * 3 + 1;
    ctx.fillStyle = '#bbbbbb';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  const bumpMap = new THREE.CanvasTexture(canvas);
  bumpMap.wrapS = bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(4, 4);
  
  // create color texture for carrot and peas
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = colorCanvas.height = size;
  const colorCtx = colorCanvas.getContext('2d');
  colorCtx.fillStyle = '#ffffff';
  colorCtx.fillRect(0, 0, size, size);
  for (let i = 0; i < size * size * 0.002; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const radius = Math.random() * 5 + 2;
    colorCtx.fillStyle = Math.random() < 0.5 ? '#FFA500' : '#00FF00';
    colorCtx.beginPath();
    colorCtx.arc(x, y, radius, 0, Math.PI * 2);
    colorCtx.fill();
  }
  const colorMap = new THREE.CanvasTexture(colorCanvas);
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(4, 4);
  colorMap.encoding = THREE.sRGBEncoding;
  
  const idliMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveMap: colorMap,
      emissiveIntensity: 1.0,
      bumpMap,
      bumpScale: 0.8,
      roughness: 1.0,
      metalness: 0
    });
  const idli = new THREE.Mesh(idliGeometry, idliMaterial);
  // triple the orbit radius
  idli.position.x = 4.5;
  pivot.add(idli);

  // Light for idli shading
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(0, 0, 5);
  scene.add(light);
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.8);
  scene.add(hemiLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    pivot.rotation.y += 0.005; // Slow orbit speed
    // Orient pentagon stars to always face the camera
    stars.rotation.copy(camera.rotation);
    renderer.render(scene, camera);
  }
  animate();

  // Handle resizing
  function onResize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize);

  return {
    destroy() {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    }
  };
}