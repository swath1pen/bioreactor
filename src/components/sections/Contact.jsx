import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Contact = () => {
  const mountRef = useRef();

  useEffect(() => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(8, 7, 18);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.minPolarAngle = 0.5;
  controls.maxPolarAngle = 1.5;
  controls.autoRotate = false;
  controls.target = new THREE.Vector3(0, 2, 0);
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

    mesh.position.set(0, 1.05, -1);
    scene.add(mesh);

    document.getElementById('progress-container').style.display = 'none';
  }, (xhr) => {
    console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
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

    // Cleanup
    return () => {
      cancelAnimationId && cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <div>
        <h1 style={{
          textAlign: "center",
          fontSize: "2rem",
          padding: "1rem 0",
          color: "white",
          background: "#222"
        }}>
          3D Render
        </h1>
        <div className="border"></div>
      </div>
      <div
        ref={mountRef}
        style={{
          flex: 1,
          minHeight: 0,
          minWidth: 0,
          position: "relative"
        }}>
      </div>
    </div>
  );
};

export default Contact;

