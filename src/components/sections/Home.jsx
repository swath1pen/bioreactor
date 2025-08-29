import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent leading-right">
            Anaerobic Electrochemical Bioreactor
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            3D printable electrochemical bioreactor for lab-scale microbial electrochemistry.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#CAD Files"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              CAD Files
            </a>

            <a
              href="#Part List"
              className="bg-emerald-300 text-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
