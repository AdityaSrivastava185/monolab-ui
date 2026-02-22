"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, ChevronRight } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [manifestationOpen, setManifestationOpen] = useState<boolean>(false);
  const [stars, setStars] = useState<number | null>(null);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 2500); // auto close
  };

  const handleManifeatation = () => {
    setManifestationOpen(true);
    setTimeout(() => setManifestationOpen(false), 2500);
  };

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/AdityaSrivastava185/monolab-ui",
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchStars();
  }, []);

  return (
    <header className="mt-3 sticky top-0 z-50 w-full md:max-w-6xl border-x border-border mx-auto">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex  items-center">
          <Link
            href={"/"}
            className="inline-flex justify-center whitespace-nowrap text-md font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 px-2.5 relative items-center"
          >
            MonoLab/UI
          </Link>
          <nav className="items-center gap-0 lg:flex">
            <Link
              href="/docs"
              className="hidden md:inline-flex justify-center whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 px-2.5 relative items-center"
            >
              docs
            </Link>
            <Link
              href="/docs"
              className="hidden md:inline-flex items-center justify-center whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 px-2.5 relative items-center"
            >
              components
            </Link>
            <button
              onClick={handleManifeatation}
              className="hidden  md:inline-flex justify-center whitespace-nowrap text-md font-medium transition-all hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-2.5 items-center cursor-pointer"
            >
              manifestation
            </button>
            {manifestationOpen && (
              <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center gap-3 bg-background text-accent-foreground border border-border rounded-xl px-4 py-3 shadow-lg min-w-fit">
                  <div className="flex items-center justify-center size-8 bg-accent-foreground border border-border rounded-xl">
                    <Check className="size-4 text-background" />
                  </div>

                  <p className="text-sm text-accent-foreground flex-1">
                    Manifestation is going live soon.
                  </p>

                  <ChevronRight className="size-4 text-accent-foreground" />
                </div>
              </div>
            )}
            <button
              onClick={handleClick}
              className="hidden  md:inline-flex justify-center whitespace-nowrap text-md font-medium transition-all hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-2.5 items-center cursor-pointer"
            >
              examples
            </button>

            {open && (
              <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center gap-3 bg-background text-accent-foreground border border-border rounded-xl px-4 py-3 shadow-lg min-w-fit">
                  <div className="flex items-center justify-center size-8 bg-accent-foreground border border-border rounded-xl">
                    <Check className="size-4 text-background" />
                  </div>

                  <p className="text-sm text-accent-foreground flex-1">
                    Examples will be available soon.
                  </p>

                  <ChevronRight className="size-4 text-accent-foreground" />
                </div>
              </div>
            )}
          </nav>
          <div className="ml-auto flex items-center md:gap-2 md:flex-2 md:justify-end">
            <div className=" w-full flex-1 md:flex md:w-auto md:flex-none">
              <Link
                target={`_blank`}
                href={"https://github.com/AdityaSrivastava185/monolab-ui"}
                className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 h-8 shadow-none"
              >
                <svg viewBox="0 0 438.549 438.549">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  ></path>
                </svg>
                <span className="text-muted-foreground w-fit text-xs tabular-nums">
                  {stars}
                </span>
              </Link>
            </div>
            <Link
              href="/"
              className="items-center justify-center whitespace-nowrap text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-foreground hover:bg-primary/20 gap-1.5 px-3 has-[>svg]:px-2.5 hidden h-[31px] rounded-lg sm:flex  md:inline-flex"
            >
              pricing
            </Link>
            <div className="items-center justify-center whitespace-nowrap text-sm md:text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 md:gap-1.5 py-2 md:py-0 px-3 has-[>svg]:px-2.5 md:h-[31px] rounded-lg sm:flex">
              expore blocks
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
