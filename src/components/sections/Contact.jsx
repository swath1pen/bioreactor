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

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

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
  const desiredSize = 4; // Adjust if you want a larger/smaller default
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = desiredSize / maxDim;
  mesh.scale.set(scale, scale, scale);
  // Re-calculate after scaling
  box.setFromObject(mesh);
  box.getCenter(center);
  // Center on (0,1,0): (above ground)
  mesh.position.x += (0 - center.x);
  mesh.position.y += (1 - center.y);
  mesh.position.z += (0 - center.z);
  // Place camera/data
  camera.position.set(0, 4, 10);
  camera.lookAt(0, 1, 0);
  controls.target.set(0, 1, 0);
  controls.update();
  // Debug logs
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


