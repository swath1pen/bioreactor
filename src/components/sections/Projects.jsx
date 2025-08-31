import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Customization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Options </h3>
              <p className="text-gray-400 mb-4">
                Additional growth conditions and parts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Anaerobic/Anaerobic", "Pressure Control", "2/3 Electrode and Hcell Configuration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                >
                  See Customization Notes →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-emerald-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Example Experiment Protocol</h3>
              <p className="text-gray-400 mb-4">
                How to run reactor for EET mechanism experiments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["doi:"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-emerald-500/10 text-emerald-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-emerald-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                >
                  See Full Protocol →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
