"use client";

import React, { useState } from "react";

export function CheckboxError() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        required
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="h-4 w-4 cursor-pointer rounded border border-red-500 bg-background"
      />
      <span
        className={`text-sm ${isChecked ? "text-foreground" : "text-red-500"}`}
      >
        I agree to the terms
      </span>
    </label>
  );
}
