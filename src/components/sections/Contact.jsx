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

    // Loader
    const loader = new GLTFLoader();
    loader.load(
      "/scene.gltf", // Corrected: path must be from public root
      (gltf) => {
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // --- Force visible size and position ---
        mesh.scale.set(2, 2, 2); // Boost size (adjust if needed)
        scene.add(mesh);

        // Calculate bounding box and center:
        const box = new THREE.Box3().setFromObject(mesh);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Reposition mesh to center it:
        mesh.position.x += (mesh.position.x - center.x);
        mesh.position.y += (mesh.position.y - center.y);
        mesh.position.z += (mesh.position.z - center.z);

        // Adjust camera for full model view
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(center.x + maxDim * 2, center.y + maxDim * 1.5, center.z + maxDim * 2.5);
        camera.lookAt(center);

        // OrbitControls focus
        controls.target.copy(center);
        controls.update();

        // Debug info
        console.log("Model center:", center);
        console.log("Model size:", size);

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

  // Be sure to render the mount ref div!
  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
  );
};


