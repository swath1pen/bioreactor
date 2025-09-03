import { RevealOnScroll } from "../RevealOnScroll";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

// Rotating STL model component with hardcoded URL
function RotatingSTL() {
  const meshRef = useRef();
  const geometry = useLoader(
    STLLoader,
    "https://raw.githubusercontent.com/swath1pen/bioreactor/main/public/bioreactor.stl"
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.00;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={0.1} // Make object smaller; adjust as needed
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color="#8bf3d0ff" />
    </mesh>
  );
}

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex-1 flex flex-col justify-center mt-20">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent leading-right">
            Microbial Electrochemical Bioreactor
          </h1>
          <p className="tex-gray-400 text-lg mb-4 max-w-lg mx-auto">
            3D printable electrochemical bioreactor for lab-scale microbial electrochemistry.
          </p>

          {/* 3D object viewer centered and close to the title */}
          <div className="mx-auto my-6 w-full max-w-md h-64 rounded-xl bg-slate-950 flex items-center justify-center shadow-lg">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[2, 2, 5]} />
              <RotatingSTL />
              <OrbitControls />
            </Canvas>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/swath1pen/bioreactor/raw/main/bioreactor_CAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              CAD Files
            </a>
            <a
                href="https://github.com/swath1pen/bioreactor/raw/main/bioreactor_partlist.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
              Part List
            </a>
          </div>
        </div>
      </RevealOnScroll>
      {/* Bottom row with GitHub logo and Lab PNG logo side-by-side */}
      <div className="w-full flex justify-center items-center mt-12 mb-4 space-x-12">
        {/* GitHub logo link - half size */}
        <a
          href="https://github.com/swath1pen/bioreactor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <svg
            className="w-18 h-18 fill-current text-white drop-shadow-lg transition"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 .296c-6.6 0-12 5.4-12 12 0 5.3 3.438 9.799 8.207 11.387.6.113.793-.262.793-.583 0-.288-.011-1.244-.016-2.26-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.808 1.304 3.493.997.108-.775.418-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.841 1.234 1.912 1.234 3.222 0 4.61-2.803 5.625-5.473 5.924.429.37.823 1.1.823 2.219 0 1.604-.015 2.897-.015 3.293 0 .323.192.699.801.581C20.565 22.092 24 17.592 24 12.296c0-6.6-5.4-12-12-12"/>
          </svg>
        </a>
        {/* Lab/NIH logo link */}
        <a
          href="https://3d.nih.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/nih.png"
            alt="gitlogo"
            className="w-24 h-auto mx-auto cursor-pointer opacity-90 hover:opacity-100 transition"
          />
        </a>
        {/* Lab/NIH logo link */}
        <a
          href="https://www.protocols.io/file-manager/3CD35A65863C11F0B2120A58A9FEAC02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/protocol_logo.png"
            alt="protocologo"
            className="w-24 h-auto mx-auto cursor-pointer opacity-90 hover:opacity-100 transition"
          />
        </a>
      </div>
    </section>
  );
};
