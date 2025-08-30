import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Contact = () => {
  const mountRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, controls, animationId;

    // Remove any leftover canvas
    while (mountRef.current && mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(4, 6, 11);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 2, 0);
    controls.update();

    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    let mesh;
    const loader = new GLTFLoader();
    loader.load(
      "scene.gltf",
      (gltf) => {
        mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        const bbox = new THREE.Box3().setFromObject(mesh);
        const size = bbox.getSize(new THREE.Vector3());
        let scaleFactor = 1;
        if (size.length() > 3) scaleFactor = 6 / size.length();
        mesh.scale.setScalar(scaleFactor);
        mesh.position.set(-3, 4.05, 1);
        scene.add(mesh);
        const progressEl = document.getElementById("progress-container");
        if (progressEl) progressEl.style.display = "none";
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    function animate() {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (mesh && scene) {
        scene.remove(mesh);
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
  }, []); // only run on mount

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#111",
        minHeight: "100vh"
      }}
    >
      <div
        ref={mountRef}
        style={{
          width: "800px",
          height: "600px",
          background: "#1a1a1a",
          borderRadius: "24px",
          boxShadow: "0 0 32px rgba(0,0,0,0.25)",
          border: "4px solid #fff",
          margin: "40px auto 24px auto",
          overflow: "hidden",
          position: "relative"
        }}
      />
    </div>
  );
};

export default Contact;
