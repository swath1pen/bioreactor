import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, controls, animationId;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(4, 5, 11);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      side: THREE.DoubleSide,
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Light
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // Loader - use RELATIVE path (not /public) when in React!
    const loader = new GLTFLoader();
    loader.load(
      "/scene.gltf", // Put your GLTF model in public/scene.gltf
      (gltf) => {
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Add to scene for bounding box calculation
        scene.add(mesh);

        // --- Auto-scale and center model ---
        const box = new THREE.Box3().setFromObject(mesh);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Pick desired maximum dimension to fit scene
        const maxModelSize = Math.max(size.x, size.y, size.z);
        const desiredSize = 4; // Model largest dimension after scaling
        const scale = desiredSize / maxModelSize;

        mesh.scale.set(scale, scale, scale);

        // Re-calculate for center after scaling
        box.setFromObject(mesh);
        box.getCenter(center);

        // Move mesh so it's centered and sits just above ground
        mesh.position.x += (0 - center.x);
        mesh.position.y += (1 - center.y);
        mesh.position.z += (0 - center.z);

        // Camera and controls focus
        camera.position.set(0, 4, 10);
        camera.lookAt(0, 1, 0);
        controls.target.set(0, 1, 0);
        controls.update();

        // Debug
        console.log("Model scale applied:", scale);
        console.log("Model new center:", center);
        console.log("Model new size:", box.getSize(new THREE.Vector3()));

        // Hide progress container if used
        const progress = document.getElementById("progress-container");
        if (progress) progress.style.display = "none";
      },
      (xhr) => {
        if (xhr.total) {
          console.log(`loading ${(xhr.loaded / xhr.total) * 100}%`);
        }
      },
      (error) => {
        console.error(error);
      }
    );

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animate
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  // Render the Three.js container
  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
  );
};


