"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-md border border-border bg-muted/30">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">
            {filename}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {language}
          </span>
        </div>
      )}

      {/* Code */}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm text-foreground/80">
            {code}
          </code>
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 rounded-md border border-border bg-background/80 p-2 opacity-0 backdrop-blur-sm transition-all hover:bg-muted group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  );
}