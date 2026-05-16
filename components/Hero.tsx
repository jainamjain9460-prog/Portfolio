import { roles, siteConfig, summary, techStack } from "@/lib/data";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        <div className="max-w-lg space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
            I&apos;m{" "}
            <span className="text-cyan-400">{siteConfig.name}</span>
          </h1>

          <h2 className="text-lg font-medium text-zinc-300 sm:text-xl">
            I am a <Typewriter words={roles} />
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400 sm:text-[0.9rem]">
            {summary}
          </p>

          <div className="space-y-2 rounded-2xl border border-cyan-500/20 bg-black/40 p-4 text-xs leading-relaxed text-zinc-400 sm:text-sm">
            {techStack.map((group) => (
              <p key={group.category}>
                <strong className="text-cyan-400">{group.category}:</strong>{" "}
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
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-xs font-semibold text-black transition hover:bg-cyan-400 sm:text-sm"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-500/40 bg-black px-5 py-2 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-500/10 sm:text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-500/30 bg-black shadow-2xl sm:h-80 sm:w-80">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border border-cyan-500/20 bg-black text-7xl font-bold text-cyan-400 sm:h-64 sm:w-64">
                JJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
