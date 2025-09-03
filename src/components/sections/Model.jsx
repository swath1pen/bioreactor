import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Model = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    mountRef.current.innerHTML = "";

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const resizeRenderer = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        renderer.setSize(clientWidth, clientHeight);
      }
    };

    resizeRenderer();
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(4, 6, 11);

    const controls = new OrbitControls(camera, renderer.domElement);
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

    const loader = new GLTFLoader();
    loader.load(
      "scene1.gltf",
      (gltf) => {
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        const bbox = new THREE.Box3().setFromObject(mesh);
        const size = bbox.getSize(new THREE.Vector3());
        let scaleFactor = 1;
        if (size.length() > 3) scaleFactor = 3 / size.length();
        mesh.scale.setScalar(scaleFactor);
        mesh.position.set(0, 1.05, 1);
        scene.add(mesh);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

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
    <div style={{ width: "100vw", height: "100vh", background: "black", position: "relative" }}>
      <Link
        to="/"
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 100,
          background: "rgba(30, 41, 59, 0.85)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.03em",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.24)",
          transition: "background 0.2s",
        }}
        onMouseOver={e => (e.currentTarget.style.background = "rgba(16,185,129,0.9)")}
        onMouseOut={e => (e.currentTarget.style.background = "rgba(30,41,59,0.85)")}
      >
        ← Back Home
      </Link>
      <div
        ref={mountRef}
        style={{
          width: "100vw",
          height: "100vh"
        }}
      />
    </div>
  );
};

export default Model;
