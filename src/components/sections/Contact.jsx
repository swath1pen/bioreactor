import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Contact = () => {
  const mountRef = useRef();

  useEffect(() => {
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    // Create scene & camera
    const scene = new THREE.Scene();

    // MOBILE ADAPTIVE CAMERA SETTINGS
    const isMobile = window.innerWidth < 600;
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    if (isMobile) {
      camera.position.set(8, 14, 24); // further and higher for small screens
    } else {
      camera.position.set(8, 7, 18);
    }

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = false;
    if (isMobile) {
      controls.minDistance = 12;
      controls.maxDistance = 40;
    } else {
      controls.minDistance = 7;
      controls.maxDistance = 30;
    }
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;

    // Add ground
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

    // Light
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    // LOAD GLTF MODEL, AUTO SCALE & CENTER
    const loader = new GLTFLoader().setPath("public/");
    loader.load(
      "scene.gltf",
      (gltf) => {
        const mesh = gltf.scene;

        // Enable shadows for meshes
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // AUTO-SCALE TO FIT
        const bbox = new THREE.Box3().setFromObject(mesh);
        const size = bbox.getSize(new THREE.Vector3());
        let scaleFactor = 1;
        if (size.length() > 5) scaleFactor = 5 / size.length(); // keep model within 5 units
        mesh.scale.setScalar(scaleFactor);

        // CENTER MODEL
        bbox.setFromObject(mesh);
        const center = bbox.getCenter(new THREE.Vector3());
        mesh.position.sub(center); // center at origin (0,0,0)

        scene.add(mesh);

        // Reset camera controls to point at model center
        controls.target.set(0, 0, 0);
        controls.update();

        // Hide any loading UI
        const progressEl = document.getElementById("progress-container");
        if (progressEl) progressEl.style.display = "none";
      },
      (xhr) => {
        // Optionally: loading progress
        console.log(`loading ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error(error);
      }
    );

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      controls.update();
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
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
    <div
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            padding: "1rem 0",
            color: "white",
            background: "#222"
          }}
        >
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
        }}
      ></div>
    </div>
  );
};

export default Contact;
