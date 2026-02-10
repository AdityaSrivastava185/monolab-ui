import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-mono text-sm font-bold text-foreground/30">
          monolab(ui)
        </span>
        <p className="text-xs text-foreground/30">
          © 2026 MonoLab UI. MIT License.
        </p>
      </div>
      <div className="mt-7 text-center text-ring">
        built by the creator of <span className="text-foreground">monolab/ui</span> and source code is available on <Link className="text-foreground" href="https://github.com/AdityaSrivastava185/monolab-ui">GitHub</Link>
      </div>
    </footer>
  );
}
