import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 text-zinc-400">
            Python Flask apps and this portfolio — hands-on work from my
            learning journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-cyan-500/20 bg-black p-6 transition hover:border-cyan-500/50"
            >
              <span className="text-xs font-medium text-cyan-400">
                {project.tag}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400">
                  {project.status}
                </span>
                <span className="text-sm font-medium text-zinc-500 group-hover:text-cyan-400">
                  View on GitHub →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
