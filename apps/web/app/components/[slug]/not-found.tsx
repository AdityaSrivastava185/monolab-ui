import Link from "next/link";
import { Navbar } from "@/components/Navbar/Navbar";

export default function ComponentNotFound() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}

      <main className="flex min-h-[80vh] flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground/80">
            Component Not Found
          </h2>
          <p className="mb-8 max-w-md text-foreground/60">
            The component you're looking for doesn't exist or hasn't been added
            yet.
          </p>
          <Link
            href="/#components"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Browse All Components
          </Link>
        </div>
      </main>
    </div>
  );
}
