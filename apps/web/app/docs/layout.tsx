import { Navbar } from "@/components/Navbar/Navbar";
import { DocsSidebar } from "@/components/Docs/DocsSidebar";
import { MobileDocsSidebar } from "@/components/Docs/MobileDocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto flex max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        {/* Desktop Sidebar */}
        <DocsSidebar />

        {/* Main Content */}
        <main className="min-w-0 flex-1 py-8 lg:py-12 lg:pl-8">
          {/* Mobile Sidebar Toggle */}
          <MobileDocsSidebar />

          <div className="max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
