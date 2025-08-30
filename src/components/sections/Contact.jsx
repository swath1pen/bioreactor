import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, controls, animationId;

    // --- Renderer ---
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Attach renderer to React ref
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // --- Scene ---
    scene = new THREE.Scene();

    // --- Camera ---
    camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(4, 4, 4);

    // --- Orbit Controls with FULL range ---
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.minDistance = 2;
    controls.maxDistance = 100;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.autoRotate = false;
    controls.target.set(0, 1, 0);
    controls.update();

    // --- Lighting ---
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // --- Load Model ---
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
      const desiredSize = 9;
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = desiredSize / maxDim;
      mesh.scale.set(scale, scale, scale);

      // Re-calculate after scaling
      box.setFromObject(mesh);
      box.getCenter(center);
      mesh.position.x += (0 - center.x);
      mesh.position.y += (1 - center.y);
      mesh.position.z += (0 - center.z);

      // Camera and controls target
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

    // --- Responsive Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Animate ---
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
  );
};


