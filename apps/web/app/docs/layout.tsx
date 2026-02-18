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
      {/* <Navbar /> */}
      <div className="mx-auto flex w-full max-w-7xl gap-10 px-4 md:pt-16 sm:px-6 lg:px-8">
        {/* Desktop Sidebar */}
        <DocsSidebar />

        {/* Main Content */}
        <main className="min-w-0 flex-1 py-8 lg:py-10">
          {/* Mobile Sidebar Toggle */}
          <MobileDocsSidebar />

          <div className="max-w-3xl text-sm text-foreground sm:text-base">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
