import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pt-12">
      <div className="mt-7 text-center text-ring">
        built by the creator of{" "}
        <span className="text-foreground">monolab/ui</span> and source code is
        available on{" "}
        <Link
          className="text-foreground"
          href="https://github.com/AdityaSrivastava185/monolab-ui"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
