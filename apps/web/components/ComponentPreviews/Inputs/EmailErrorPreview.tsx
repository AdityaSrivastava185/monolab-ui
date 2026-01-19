"use client";

import React, { useState } from "react";

export default function EmailErrorPreview() {
  const [value, setValue] = useState("invalid-email");

  const isValidEmail = (v: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  };

  const valid = isValidEmail(value);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        htmlFor="email-error"
        className="text-sm font-medium text-foreground"
      >
        Email
      </label>
      <input
        id="email-error"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full rounded-md border bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-1 transition-shadow ${
          value.length > 0 && !valid
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "border-border/20 focus:border-foreground/40 focus:ring-foreground/20"
        }`}
      />
      {/* show warning only when there's input and it's invalid */}
      {!valid && value.length > 0 ? (
        <p className="text-xs text-red-500">
          Please enter a valid email address.
        </p>
      ) : null}
    </div>
  );
}
