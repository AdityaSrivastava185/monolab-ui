import Link from "next/link";
import { ComponentVariant } from "../types";

export const cardVariants: ComponentVariant[] = [
  {
    id: "payment-method",
    name: "Payment Method",
    code: `
<div className="w-full rounded-xl border border-border bg-background p-6 text-foreground min-w-sm">
        <h3 className="text-lg font-semibold mb-2 font-sans">Payment Method</h3>
        <p className="text-sm text-foreground/60 mb-4 font-sans">
          All transactions are secure and encrypted
        </p>

        <label className="block text-sm mb-2">Name on Card</label>
        <input
          className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder="John Doe"
        />

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm mb-2">Card Number</label>
            <input
              className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground"
              placeholder="1234 5678 9012 3456"
            />
            <p className="text-[11px] text-foreground/60 mt-1">
              Enter your 16-digit number.
            </p>
          </div>
          <div className="w-24">
            <label className="block text-sm mb-2">CVV</label>
            <input
              className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground"
              placeholder="123"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <div className="flex-1">
            <label className="block text-sm mb-2">Month</label>
            <select className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground">
              <option>MM</option>
            </select>
          </div>
          <div className="w-24">
            <label className="block text-sm mb-2">Year</label>
            <select className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground">
              <option>YYYY</option>
            </select>
          </div>
        </div>

        <hr className="my-4 border-border" />

        <div className="mb-4">
          <h4 className="text-sm font-medium">Billing Address</h4>
          <p className="text-[12px] text-foreground/60">
            The billing address associated with your payment method
          </p>
          <label className="inline-flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border border-border bg-muted"
            />
            <span className="text-sm text-foreground/80">
              Same as shipping address
            </span>
          </label>
        </div>

        <label className="block text-sm mb-2">Comments</label>
        <textarea
          className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder="Add any additional comments"
        />

        <div className="flex gap-3">
          <button className="rounded-xl bg-foreground text-background px-4 py-2 text-sm cursor-pointer">Submit</button>
          <button className="rounded-xl border border-border px-4 py-2 text-sm cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    `,
    preview: (
      <div className="w-full rounded-xl border border-border bg-background p-6 text-foreground min-w-sm">
        <h3 className="text-lg font-semibold mb-2 font-sans">Payment Method</h3>
        <p className="text-sm text-foreground/60 mb-4 font-sans">
          All transactions are secure and encrypted
        </p>

        <label className="block text-sm mb-2">Name on Card</label>
        <input
          className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder="John Doe"
        />

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm mb-2">Card Number</label>
            <input
              className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground"
              placeholder="1234 5678 9012 3456"
            />
            <p className="text-[11px] text-foreground/60 mt-1">
              Enter your 16-digit number.
            </p>
          </div>
          <div className="w-24">
            <label className="block text-sm mb-2">CVV</label>
            <input
              className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground"
              placeholder="123"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <div className="flex-1">
            <label className="block text-sm mb-2">Month</label>
            <input className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground" placeholder="MM" />
          </div>
          <div className="w-24">
            <label className="block text-sm mb-2">Year</label>
            <input className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground" placeholder="YYYY" />
          </div>
        </div>

        <hr className="my-4 border-border" />

        <div className="mb-4">
          <h4 className="text-sm font-medium">Billing Address</h4>
          <p className="text-[12px] text-foreground/60">
            The billing address associated with your payment method
          </p>
          <label className="inline-flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border border-border/30 bg-muted"
            />
            <span className="text-sm text-foreground/80">
              Same as shipping address
            </span>
          </label>
        </div>

        <label className="block text-sm mb-2">Comments</label>
        <textarea
          className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder="Add any additional comments"
        />

        <div className="flex gap-3">
          <button className="rounded-xl bg-foreground text-background px-4 py-2 text-sm cursor-pointer">Submit</button>
          <button className="rounded-xl border border-border/30 px-4 py-2 text-sm cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    ),
    state: "stateful",
  },
  {
    id: "login-form",
    name: "Login Form",
    code: `
 <div className="w-full rounded-xl border border-border bg-background p-6 text-foreground">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold mb-2">Login to your account</h3>
          <Link href={"#"} className="text-sm text-foreground/60 hover:text-accent-foreground">Sign Up</Link>
        </div>
        <div className="text-sm text-foreground/60 mb-4">
          Enter your email below to login to your account
        </div>

        <label className="block text-sm mb-2">Email</label>
        <input
          className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder="m@example.com"
        />

        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm">Password</label>
         <Link href={"#"} className="text-sm text-foreground/60 hover:text-accent-foreground">Forgot your password?</Link>
        </div>
        <input
          className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder=""
        />

        <button className="w-full rounded-xl bg-foreground text-background px-4 py-2 mb-3">
          Login
        </button>
        <button className="w-full rounded-xl border border-border px-4 py-2">
          Login with Google
        </button>
      </div>
    `,
    preview: (
      <div className="w-full rounded-xl border border-border bg-background p-6 text-foreground">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold mb-2">Login to your account</h3>
          <Link href={"#"} className="text-sm text-foreground/60 hover:text-accent-foreground">Sign Up</Link>
        </div>
        <div className="text-sm text-foreground/60 mb-4">
          Enter your email below to login to your account
        </div>

        <label className="block text-sm mb-2">Email</label>
        <input
          className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder="m@example.com"
        />

        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm">Password</label>
         <Link href={"#"} className="text-sm text-foreground/60 hover:text-accent-foreground">Forgot your password?</Link>
        </div>
        <input
          className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground mb-4"
          placeholder=""
        />

        <button className="w-full rounded-xl bg-foreground text-background px-4 py-2 mb-3">
          Login
        </button>
        <button className="w-full rounded-xl border border-border px-4 py-2">
          Login with Google
        </button>
      </div>
    ),
    state: "stateful",
  },
];
