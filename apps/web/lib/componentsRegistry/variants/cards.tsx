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
            <input
              className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground"
              placeholder="MM"
            />
          </div>
          <div className="w-24">
            <label className="block text-sm mb-2">Year</label>
            <input
              className="w-full rounded-xl border border-border/30 bg-muted px-3 py-2 text-xs text-foreground"
              placeholder="YYYY"
            />
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
          <button className="rounded-xl bg-foreground text-background px-4 py-2 text-sm cursor-pointer">
            Submit
          </button>
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
          <Link
            href={"#"}
            className="text-sm text-foreground/60 hover:text-accent-foreground"
          >
            Sign Up
          </Link>
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
          <Link
            href={"#"}
            className="text-sm text-foreground/60 hover:text-accent-foreground"
          >
            Forgot your password?
          </Link>
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
  {
    id: "profile-card",
    name: "Profile Card",
    code: `
 <div className="w-full max-w-sm rounded-xl border border-border bg-background p-6 text-foreground text-center">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="Profile Picture"
          className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-foreground/20"
        />
        <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
        <p className="text-sm text-foreground/60 mb-4">
          Software Engineer at TechCorp
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <div>
            <span className="block text-lg font-bold">150</span>
            <span className="text-xs text-foreground/60">Followers</span>
          </div>
          <div>
            <span className="block text-lg font-bold">200</span>
            <span className="text-xs text-foreground/60">Following</span>
          </div>
          <div>
            <span className="block text-lg font-bold">50</span>
            <span className="text-xs text-foreground/60">Posts</span>
          </div>
        </div>
        <button className="rounded-xl bg-foreground text-background px-4 py-2">
          Follow
        </button>
      </div>
    `,
    preview: (
      <div className="w-full max-w-sm rounded-xl border border-border bg-background p-6 text-foreground text-center">
        <img
          src="https://is.zobj.net/image-server/v1/images?r=30ksz8J4vG5mPMeAbxDg_lVy05D60ZHrBab_UAbiRl0ZIxwvQZ6blQSFFf2c3Rwtey2MilOS4atdSifQcGeglZbZz39oTx_53-6ZDRDG0lKWDDapB6oXyyTvtTGHUaLRJQxVKYcOP9L3RgMalJJZ8WwM8P3eSsG3yXKCcivE1R2vR0EIwEBgLicnsv_Vk5I7h3GO4nDdUuZvx2gXQBNwta-lwTWQ2UVi9ygJe-9HQoRm_aR3Iw5NiE3snC4"
          alt="Profile Picture"
          className="mx-auto mb-4  rounded-xl border-4 border-foreground/20"
        />
        <h3 className="text-xl font-semibold mb-1">Agatsuma Zenitsu</h3>
        <p className="text-sm text-foreground/60 mb-4">
        Demon slayer Member
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <div>
            <span className="block text-lg font-bold">150B</span>
            <span className="text-xs text-foreground/60">Followers</span>
          </div>
          <div>
            <span className="block text-lg font-bold">20B</span>
            <span className="text-xs text-foreground/60">Following</span>
          </div>
          <div>
            <span className="block text-lg font-bold">00</span>
            <span className="text-xs text-foreground/60">Posts</span>
          </div>
        </div>
        <Link href={"#"} className="rounded-xl bg-foreground text-background px-4 py-2">
          Follow
        </Link>
      </div>
    ),
    state: "stateless",
  },
  {
    id: "product-card",
    name: "Product Card",
    code: `
 <div className="w-full max-w-sm rounded-xl border border-border bg-background p-6 text-foreground">
        <img
          src="https://via.placeholder.com/300"
          alt="Product Image"
          className="mb-4 h-48 w-full object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mb-2">Product Name</h3>
        <p className="text-sm text-foreground/60 mb-4">
          Brief description of the product goes here.
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">$29.99</span>
          <button className="rounded-xl bg-foreground text-background px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    `,
    preview: (
      <div className="w-full max-w-sm rounded-xl border border-border bg-background p-6 text-foreground">
        <img
          src="https://is.zobj.net/image-server/v1/images?r=KlLkR_QIS3Srd6B2mA4-_B2NNmIATDEgoZNTPJedxM9GpQBUdlwaYfWpjYt-tWzvz_LJuZAPKLmt2dex2xbTmtzbIb3Jw_zeKKUk4ZYuwf_XoP6pmkk9rSzfk7Kzz_K583fE0gxntJC0GgCyLSLOhSlkVD0Qva4x28RBT7Hsup4MYPx8YYjFkvphK80U6km1rkWe4qMZyN2ACqJoZQOUp5lPM7h_Uaqt2LDwVQ"
          alt="Product Image"
          className="mb-4 h-48 w-full object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mb-2">Tomioka Giyu - Water Hashira Poster</h3>
        <p className="text-sm text-foreground/60 mb-4">
          Tomioka Giyu is the Water Hashira of the Demon Slayer Corps, known for his calm and stoic demeanor.
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">$29.99</span>
          <Link href={"#"} className="rounded-xl bg-foreground text-background px-4 py-2">
            Add to Cart
          </Link>
        </div>
      </div>
    ),
    state: "stateless",
  }
  
];
