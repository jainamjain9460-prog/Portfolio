import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year}{" "}
          <span className="font-medium text-zinc-300">{siteConfig.name}</span>.
          All rights reserved.
        </p>
        <p className="text-zinc-600">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
