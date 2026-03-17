"use client";

import Link from "next/link";

const AuthExamplePage = () => {
  return (
    <div>
      <div id="component-container" className="w-full bg-card p-2">
        <div className="flex justify-between h-full">
          <div className="flex flex-row w-full h-full">
            <div className="hidden bg-secondary lg:flex  flex-col justify-between p-8">
              <div>
                <div className="flex gap-2">
                  <Link
                    href={"/"}
                    className="bg-foreground h-fit w-fit px-3 py-2 rounded-xl"
                  >
                    <p className="text-background font-semibold">Acme Inc.</p>
                  </Link>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex gap-2">
                  <p className="text-sm text-foreground leading-relaxed max-w-xl">
                    A carefully crafted set of components and patterns for
                    building high-quality product interfaces. Customize, extend,
                    and make it your own.
                  </p>
                </div>
                <div className="flex gap-6">
                  <Link
                    href="#"
                    className="text-ring hover:text-foreground transition"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-ring hover:text-foreground transition"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    className="text-ring hover:text-foreground transition"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex items-center justify-center  bg-background p-8">
              <div className="w-full max-w-md p-8">
                {/* Heading */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Register or login
                  </h1>
                  <p className="text-sm text-ring">
                    To keep up things easy , please login with your credentials
                    and hit continue
                  </p>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-8">
                  <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black py-3 rounded-lg transition font-medium text-sm">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Sign in with Google
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-foreground hover:bg-gray-100 text-background py-3 rounded-lg transition font-medium text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github-icon lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Sign in with github
                  </button>
                </div>

                <div className="text-center w-full">
                   <span className="text-muted-foreground">or</span>
                </div>

                {/* Email Input */}
                <div className="my-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="***********"
                      className="w-full rounded-md border border-border/20 bg-[#1c1c1c] px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right mb-5">
                  <Link
                    href="#"
                    className="text-sm text-ring hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <label className="flex cursor-pointer items-start gap-3 my-4">
                    <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      Recieve features updates and hiring tips
                    </span>
                    <span className="text-xs text-ring">
                      Receive emails about new products and features.Get ocassional insights , new feature releases and hiring updates at monolabui and monoverse
                    </span>
                  </div>
                  <div className="relative mt-0.5">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-6 w-11 rounded-full bg-secondary  transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-foreground/70 after:transition-all peer-checked:bg-foreground peer-checked:after:translate-x-full peer-checked:after:bg-background"></div>
                  </div>
                </label>

                {/* Sign In Button */}
                <button className="w-full bg-foreground hover:bg-secondary hover:text-foreground text-background font-semibold py-3 rounded-lg transition mb-4 cursor-pointer">
                  Sign In
                </button>

                {/* Register Link */}
                <div>
                  <p className="text-sm text-ring">
                    Don't have an account?{" "}
                    <Link
                      href="#"
                      className="text-foreground hover:underline transition font-medium"
                    >
                      Register Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthExamplePage;
