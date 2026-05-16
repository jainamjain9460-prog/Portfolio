import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-black p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Say Hey to me!!
            </h2>
            <p className="mt-4 text-zinc-400">
              I take pride in delivering thoughtful, data-driven solutions with a
              disciplined and growth-oriented mindset. Let&apos;s connect for
              opportunities, collaborations, or mentorship.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 sm:w-auto"
              >
                Email Me
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex w-full items-center justify-center rounded-full border border-cyan-500/40 bg-black px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10 sm:w-auto"
              >
                Call Me
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-zinc-400 sm:grid-cols-3">
              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <p className="mt-1 text-zinc-200">{siteConfig.email}</p>
              </div>
              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Phone
                </p>
                <p className="mt-1 text-zinc-200">{siteConfig.phone}</p>
              </div>
              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Location
                </p>
                <p className="mt-1 text-zinc-200">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
