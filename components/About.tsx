import { certifications, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24">

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="mt-3 text-zinc-400">
            Education, certifications, and what drives my growth in technology.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Education</h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-cyan-500/20 bg-black/40 p-5"
                >
                  <p className="font-semibold text-white">{item.school}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.degree}</p>

                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-400">
                      Percentage: {item.percentage}
                    </span>
                    <span className="text-zinc-500">{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-cyan-500/20 bg-black/40 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-semibold text-white">{cert.title}</p>
                    <span className="shrink-0 text-xs font-medium text-cyan-400">
                      {cert.provider}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {cert.topics}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
