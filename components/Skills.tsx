import { skills } from "@/lib/data";

const iconMap: Record<string, string> = {
  python: "PY",
  chart: "DS",
  brain: "ML",
  react: "RX",
  viz: "DV",
  server: "FL",
  spark: "SP",
  puzzle: "PS",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-sm font-bold text-violet-300">
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
