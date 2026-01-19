'use client';

import React, { useState } from "react";

export default function PasswordInput(){
    const [value , setValue] = useState('');
    const [showPassword , setShowPassword] = useState(true);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return(
       <div className="relative">
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Enter password"
            className="w-full rounded-md border border-border/20 bg-background py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-foreground/50 focus:border-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
  />
  <button
    type="button"
    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
    onClick={handleShowPassword}
  >
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  </button>
</div> 
    )
}