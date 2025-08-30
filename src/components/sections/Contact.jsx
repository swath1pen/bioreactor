import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Contact = () => {
  const mountRef = useRef();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);

    // We'll set size later based on the container size.

    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000); // aspect set below
    camera.position.set(4, 5, 11);

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

    // Lighting, ground, etc. (same as before, or edit as desired...)

    // SpotLight
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // (Optional) AmbientLight makes everything a bit brighter:
    // const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    // scene.add(ambientLight);

    // Model Loader, with centering and scaling
    const loader = new GLTFLoader();
    loader.load('/scene.gltf', (gltf) => {
      const model = gltf.scene;
      // Center and scale
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      model.position.x += (0 - center.x);
      model.position.y += (1 - center.y);
      model.position.z += (0 - center.z);

      const maxDim = Math.max(size.x, size.y, size.z);
      const desiredSize = 3;
      if (maxDim > 0) {
        const scale = desiredSize / maxDim;
        model.scale.set(scale, scale, scale);
      }

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(model);
    }, undefined, (error) => {
      console.error(error);
    });

    // Resize handler - fit canvas to container div, keep correct aspect
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    setTimeout(handleResize, 10); // Ensure fit after render

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
