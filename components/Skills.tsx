import { skills } from "@/lib/data";

const iconMap: Record<string, string> = {
  python: "PY",
  chart: "DS",
  react: "RX",
  viz: "DV",
  server: "FL",
  vscode: "VC",
  git: "GT",
  pycharm: "PC",
  vercel: "VR",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <p className="mt-3 text-zinc-400">
            These are my working skills & services I have built through projects
            and coursework.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="group rounded-2xl border border-cyan-500/20 bg-black/40 p-6 transition hover:border-cyan-500/50 hover:bg-black/60"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-black text-sm font-bold text-cyan-400">
                {iconMap[skill.icon] ?? "SK"}
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
