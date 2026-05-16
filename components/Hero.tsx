import { roles, siteConfig, summary, techStack } from "@/lib/data";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>

          <h2 className="text-2xl font-medium text-zinc-300 sm:text-3xl">
            I am a <Typewriter words={roles} />
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {summary}
          </p>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-zinc-400">
            {techStack.map((group) => (
              <p key={group.category}>
                <strong className="text-zinc-200">{group.category}:</strong>{" "}
                {group.items.join(", ")}
                {group.category === "Core Strengths" ? ", and much more..." : ""}
              </p>
            ))}
            <p className="pt-1 text-zinc-300">
              Thanks for visiting my portfolio! Happy coding!
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm fontibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-2xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#1a1f35] to-[#0f1424] shadow-2xl sm:h-80 sm:w-80">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/40 to-cyan-600/30 text-7xl font-bold text-white sm:h-64 sm:w-64">
                JJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
