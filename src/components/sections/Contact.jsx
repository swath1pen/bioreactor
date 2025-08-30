import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(4, 4, 4);

// --- ORBIT CONTROLS WITH FULL RANGE ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;                // Allow panning if desired
controls.minDistance = 2;                 // Allow closer zoom
controls.maxDistance = 100;               // Allow very far zoom
controls.minPolarAngle = 0;               // No downwards restriction
controls.maxPolarAngle = Math.PI;         // Allow up and down full range
controls.autoRotate = false;              
controls.target.set(0, 1, 0);             // Center on model origin
controls.update();

const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

const loader = new GLTFLoader().setPath('public/');
loader.load('scene.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // --- Auto-scale and center model ---
  scene.add(mesh);
  const box = new THREE.Box3().setFromObject(mesh);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const desiredSize = 9; // Adjust as you like for your scene units
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = desiredSize / maxDim;
  mesh.scale.set(scale, scale, scale);

  // Re-calculate after scaling
  box.setFromObject(mesh);
  box.getCenter(center);
  mesh.position.x += (0 - center.x);
  mesh.position.y += (1 - center.y);
  mesh.position.z += (0 - center.z);

  // Place camera and controls
  camera.position.set(0, 4, 10);
  camera.lookAt(0, 1, 0);
  controls.target.set(0, 1, 0);
  controls.update();

  console.log('Model scale applied:', scale);
  console.log('Model new center:', center);
  console.log('Model new size:', box.getSize(new THREE.Vector3()));

  const progress = document.getElementById('progress-container');
  if (progress) progress.style.display = 'none';
}, (xhr) => {
  console.log(`loading ${(xhr.loaded / xhr.total) * 100}%`);
}, (error) => {
  console.error(error);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
// --- END OF FILE ---


