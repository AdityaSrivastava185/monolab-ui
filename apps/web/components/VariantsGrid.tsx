"use client";

import { ReactNode } from "react";
import { CopyButton } from "@/components/CopyButton";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

interface VariantItem {
  id: string;
  name?: string;
  preview: ReactNode;
  code: string;
}

interface VariantsGridProps {
  variants: VariantItem[];
}

export function VariantsGrid({ variants }: VariantsGridProps) {
  if (!variants || variants.length === 0) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-2xl border border-border/10 bg-card/50">
        <ComingSoonBadge />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 border-t border-border/10 md:grid-cols-2 lg:grid-cols-3">
      {variants.map((variant, index) => (
        <VariantCell
          key={variant.id}
          index={index}
          totalCount={variants.length}
          code={variant.code}
        >
          {variant.preview}
        </VariantCell>
      ))}
    </div>
  );
}

function VariantCell({
  children,
  index,
  totalCount,
  code,
}: {
  children: ReactNode;
  index: number;
  totalCount: number;
  code: string;
}) {
  const cols = 3;
  const isRightEdgeLg = (index + 1) % cols === 0;
  const isRightEdgeMd = (index + 1) % 2 === 0;

  return (
    <div
      className={`
        group relative flex min-h-32 items-center justify-center p-8
        border-b border-border/10 m-1
        md:border-r md:border-border/10 bg-card/80
        rounded-sm
      `}
    >
      <div className="flex items-center justify-center">{children}</div>
      <CopyButton
        code={code}
        className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </div>
  );
}
