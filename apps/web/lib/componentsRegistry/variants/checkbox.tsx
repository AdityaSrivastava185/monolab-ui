import { CheckboxError } from "@/components/ComponentPreviews/Checkbox/CheckboxError";
import { ComponentVariant } from "../types";

/**
 * Checkbox Variants
 *
 * All checkbox component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const checkboxVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Checkbox",
    code: `<label className="inline-flex cursor-pointer items-center">
  <input
    type="checkbox"
    className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
</label>`,
    preview: (
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          defaultChecked
          className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </label>
    ),
  },
  {
    id: "with-label",
    name: "Checkbox with Label",
    code: `<label className="inline-flex cursor-pointer items-center gap-2">
  <input
    type="checkbox"
    className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <span className="text-sm text-foreground">Accept terms and conditions</span>
</label>`,
    preview: (
      <label className="inline-flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="text-sm text-foreground">
          Accept terms and conditions
        </span>
      </label>
    ),
  },
  {
    id: "with-description",
    name: "Checkbox with Description",
    code: `<label className="flex cursor-pointer items-start gap-3">
  <input
    type="checkbox"
    className="mt-0.5 h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div className="flex flex-col">
    <span className="text-sm font-medium text-foreground">Newsletter</span>
    <span className="text-xs text-foreground/50">Get notified about updates and new features.</span>
  </div>
</label>`,
    preview: (
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          defaultChecked
          className="mt-0.5 h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            Newsletter
          </span>
          <span className="text-xs text-foreground/50">
            Get notified about updates and new features.
          </span>
        </div>
      </label>
    ),
  },
  {
    id: "disabled",
    name: "Disabled Checkbox",
    code: `<label className="inline-flex cursor-not-allowed items-center gap-2 opacity-50">
  <input
    type="checkbox"
    disabled
    className="h-4 w-4 cursor-not-allowed appearance-none rounded border border-border/20 bg-muted"
  />
  <span className="text-sm text-foreground">Disabled option</span>
</label>`,
    preview: (
      <label className="inline-flex cursor-not-allowed items-center gap-2 opacity-50">
        <input
          type="checkbox"
          disabled
          className="h-4 w-4 cursor-not-allowed appearance-none rounded border border-border/20 bg-muted"
        />
        <span className="text-sm text-foreground">Disabled option</span>
      </label>
    ),
  },
  {
    id: "disabled-checked",
    name: "Disabled Checkbox (Checked)",
    code: `<label className="inline-flex cursor-not-allowed items-center gap-2 opacity-50">
  <input
    type="checkbox"
    disabled
    checked
    className="h-4 w-4 cursor-not-allowed appearance-none rounded border border-foreground bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <span className="text-sm text-foreground">Disabled checked</span>
</label>`,
    preview: (
      <label className="inline-flex cursor-not-allowed items-center gap-2 opacity-50">
        <input
          type="checkbox"
          disabled
          defaultChecked
          className="h-4 w-4 cursor-not-allowed appearance-none rounded border border-foreground bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="text-sm text-foreground">Disabled checked</span>
      </label>
    ),
  },
  {
    id: "rounded",
    name: "Rounded Checkbox",
    code: `<label className="inline-flex cursor-pointer items-center gap-2">
  <input
    type="checkbox"
    className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <span className="text-sm text-foreground">Rounded checkbox</span>
</label>`,
    preview: (
      <label className="inline-flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          defaultChecked
          className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="text-sm text-foreground">Rounded checkbox</span>
      </label>
    ),
  },
  {
    id: "large",
    name: "Large Checkbox",
    code: `<label className="inline-flex cursor-pointer items-center gap-3">
  <input
    type="checkbox"
    className="h-5 w-5 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <span className="text-sm text-foreground">Large checkbox</span>
</label>`,
    preview: (
      <label className="inline-flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          defaultChecked
          className="h-5 w-5 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="text-sm text-foreground">Large checkbox</span>
      </label>
    ),
  },
  {
    id: "checkbox-group",
    name: "Checkbox Group",
    code: `<div className="flex flex-col gap-3">
  <label className="inline-flex cursor-pointer items-center gap-2">
    <input
      type="checkbox"
      className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
        backgroundSize: "100% 100%",
      }}
    />
    <span className="text-sm text-foreground">Option 1</span>
  </label>
  <label className="inline-flex cursor-pointer items-center gap-2">
    <input type="checkbox" className="..." />
    <span className="text-sm text-foreground">Option 2</span>
  </label>
  <label className="inline-flex cursor-pointer items-center gap-2">
    <input type="checkbox" className="..." />
    <span className="text-sm text-foreground">Option 3</span>
  </label>
</div>`,
    preview: (
      <div className="flex flex-col gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <span className="text-sm text-foreground">Option 1</span>
        </label>
        <label className="inline-flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <span className="text-sm text-foreground">Option 2</span>
        </label>
        <label className="inline-flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <span className="text-sm text-foreground">Option 3</span>
        </label>
      </div>
    ),
  },
  {
    id: "card-checkbox",
    name: "Card Checkbox",
    code: `<label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border/20 bg-background p-4 transition-colors hover:bg-muted/50">
  <input
    type="checkbox"
    className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
    style={{
      backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div className="flex flex-col">
    <span className="text-sm font-medium text-foreground">Premium Plan</span>
    <span className="text-xs text-foreground/50">$9.99/month</span>
  </div>
</label>`,
    preview: (
      <label className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-border/20 bg-background p-4 transition-colors hover:bg-muted/50">
        <input
          type="checkbox"
          defaultChecked
          className="h-4 w-4 cursor-pointer appearance-none rounded border border-border/30 bg-background checked:border-foreground checked:bg-foreground"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            Premium Plan
          </span>
          <span className="text-xs text-foreground/50">$9.99/month</span>
        </div>
      </label>
    ),
  },
  {
    id: "error",
    name: "Checkbox with Error",
        code: `
    'use client';
    
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
            className={"text-sm " + (isChecked ? "text-foreground" : "text-red-500")}
          >
            I agree to the terms
          </span>
        </label>
      );
    }
    `,
        preview: <CheckboxError/>
  },
];
