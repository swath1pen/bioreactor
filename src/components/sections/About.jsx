import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "NIH 3D Database Deposit",
    "Journal of Chemical Education Paper",
  ];
  const backendSkills = ["3D Printing", "Gasket Fabrication", "Assembly"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            Usage
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              For 100mL scale microbial electrochemical experiments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Resources</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 
                                    hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Protocols</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 
                                    hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 MIT Furst Lab </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Department of Chemical Engineering </strong> - MIT
                  2025
                </li>
                <li>
                  Designed by: Swathi Penumutchu
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Cite </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    GitHub Repo{" "}
                  </h4>
                  <p>
                    Links to design files protocols.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    BioEchemBuilds Database{" "}
                  </h4>
                  <p>
                    Fabrication database with all builds in microbial elechemistry toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
