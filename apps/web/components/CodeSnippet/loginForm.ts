export const loginFormCode = `"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

 const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", { email, password });
      onSubmit?.(email, password);
      setIsLoading(false);
      setEmail("")
      setPassword("")
    }, 500);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo/Brand */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-foreground">
            <Link href={"/"} className="text-background font-semibold text-lg">
              Acme Inc.
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Yoooo, welcome back!
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Your email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border/20 bg-[#1c1c1c] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border/20 bg-[#1c1c1c] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-colors"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/50 cursor-pointer"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/20"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-3 text-muted-foreground">Or</span>
          </div>
        </div>

        {/* Alternative Sign In Options */}
        <div className="space-y-3">
          {/* Magic Link */}
          <button
            type="button"
            className="w-full py-2.5 px-4 rounded-md border border-border/30 text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
          >
            Sign in using magic-link
          </button>

          {/* SSO */}
          <button
            type="button"
            className="w-full py-2.5 px-4 rounded-md border border-border/30 text-foreground font-medium hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer"
          >
            Single sign-on (SSO)
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-center mx-auto text-muted-foreground max-w-xs">
          By signing in, you acknowledge that you read our{" "}
          <button className="text-foreground hover:underline focus:outline-none">
            Terms of Service
          </button>{" "}
          and{" "}
          <button className="text-foreground hover:underline focus:outline-none">
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginForm;`;
