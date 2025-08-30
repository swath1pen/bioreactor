import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Contact = () => {
  const mountRef = useRef();

  useEffect(() => {
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera (matching your working FOV and position)
    const camera = new THREE.PerspectiveCamera(
      95,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 4, 10);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.minDistance = 2;
    controls.maxDistance = 100;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.autoRotate = false; // Set true for auto
    controls.target.set(0, 1, 0);
    controls.update();

    // Light
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // Model Loader - match vanilla
    const loader = new GLTFLoader();
    loader.load(
      "/public/scene.gltf", // React projects must use / at the root; public/scene.gltf in filesystem
      (gltf) => {
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        scene.add(mesh);

        // Auto-scale and center model, as in your vanilla
        const box = new THREE.Box3().setFromObject(mesh);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const desiredSize = 9;
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = desiredSize / maxDim;
        mesh.scale.set(scale, scale, scale);

        // Re-center after scaling
        box.setFromObject(mesh);
        box.getCenter(center);
        mesh.position.x += (0 - center.x);
        mesh.position.y += (1 - center.y);
        mesh.position.z += (0 - center.z);

        // Camera and controls
        camera.position.set(0, 4, 10);
        camera.lookAt(0, 1, 0);
        controls.target.set(0, 1, 0);
        controls.update();
      },
      undefined,
      (error) => {
        console.error("GLTFLoader error:", error);
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
    let animationId;
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
    <div>
      <h1>3D Render</h1>
      <div className="border"></div>
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default Contact;





