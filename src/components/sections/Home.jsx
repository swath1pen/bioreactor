import { RevealOnScroll } from "../RevealOnScroll";
import buildImg from "../../assets/build.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className="mt-20 text-5xl md:text-7xl font-bold mb-6 
              bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Build
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Description.
          </p>
          {/* Container with background and centered image */}
          <div className="bg-slate-800 max-w-md w-full mx-auto p-4 rounded-lg shadow-md flex justify-center items-center mb-8 h-64 md:h-80 relative">
            <img
              src={buildImg}
              alt="Build"
              className="max-h-full max-w-full object-contain m-auto"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="/build_CAD.pdf"
              download
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              CAD Files
            </a>
            <a
              href="/build_part_List.xlsx"
              download
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Part List
            </a>
          </div>
          {/* Logos now directly below the buttons */}
          <div className="flex justify-center items-center space-x-12 mt-4 mb-4">
            {/* GitHub logo link */}
            <a
              href="https://github.com"
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
                alt="nihlogo"
                className="w-24 h-auto mx-auto cursor-pointer opacity-90 hover:opacity-100 transition"
              />
            </a>
            {/* Protocol.io document */}
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
        </div>
      </RevealOnScroll>
    </section>
  );
};
