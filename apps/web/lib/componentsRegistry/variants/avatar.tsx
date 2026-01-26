import { ComponentVariant } from "../types";

/**
 * Avatar Variants
 *
 * All avatar component variants are defined here.
 * Each variant has an id, name, preview component, and copyable code.
 */
export const avatarVariants: ComponentVariant[] = [
  {
    id: "simple",
    name: "Simple Avatar",
    code: `<img
  src="https://i.pravatar.cc/150?img=1"
  alt="User avatar"
  className="h-10 w-10 rounded-full object-cover"
/>`,
    preview: (
      <img
        src="https://i.pravatar.cc/150?img=1"
        alt="User avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
    ),
    state : "stateless"
  },
  {
    id: "with-initials",
    name: "Avatar with Initials",
    code: `<div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
  JD
</div>`,
    preview: (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
        JD
      </div>
    ),
    state : "stateless"
  },
  {
    id: "with-fallback",
    name: "Avatar with Icon Fallback",
    code: `<div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
  <svg className="h-6 w-6 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
</div>`,
    preview: (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        <svg
          className="h-6 w-6 text-foreground/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    ),
    state : "stateless"
  },
  {
    id: "sizes",
    name: "Avatar Sizes",
    code: `<div className="flex items-center gap-3">
  <img src="..." alt="..." className="h-8 w-8 rounded-full object-cover" />
  <img src="..." alt="..." className="h-10 w-10 rounded-full object-cover" />
  <img src="..." alt="..." className="h-12 w-12 rounded-full object-cover" />
  <img src="..." alt="..." className="h-14 w-14 rounded-full object-cover" />
</div>`,
    preview: (
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=2"
          alt="User"
          className="h-8 w-8 rounded-full object-cover"
        />
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="User"
          className="h-10 w-10 rounded-full object-cover"
        />
        <img
          src="https://i.pravatar.cc/150?img=4"
          alt="User"
          className="h-12 w-12 rounded-full object-cover"
        />
        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="User"
          className="h-14 w-14 rounded-full object-cover"
        />
      </div>
    ),
    state : "stateless"
  },
  {
    id: "with-status",
    name: "Avatar with Status",
    code: `<div className="relative inline-block">
  <img
    src="https://i.pravatar.cc/150?img=6"
    alt="User avatar"
    className="h-10 w-10 rounded-full object-cover"
  />
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
</div>`,
    preview: (
      <div className="flex items-center gap-4">
        <div className="relative inline-block">
          <img
            src="https://i.pravatar.cc/150?img=6"
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
        </div>
        <div className="relative inline-block">
          <img
            src="https://i.pravatar.cc/150?img=7"
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-yellow-500"></span>
        </div>
        <div className="relative inline-block">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="User avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-red-500"></span>
        </div>
      </div>
    ),
    state : "stateless"
  },
  {
    id: "with-ring",
    name: "Avatar with Ring",
    code: `<img
  src="https://i.pravatar.cc/150?img=9"
  alt="User avatar"
  className="h-10 w-10 rounded-full object-cover ring-2 ring-foreground ring-offset-2 ring-offset-background"
/>`,
    preview: (
      <img
        src="https://i.pravatar.cc/150?img=9"
        alt="User avatar"
        className="h-10 w-10 rounded-full object-cover ring-2 ring-foreground ring-offset-2 ring-offset-background"
      />
    ),
    state : "stateless"
  },
  {
    id: "squared",
    name: "Squared Avatar",
    code: `<img
  src="https://i.pravatar.cc/150?img=10"
  alt="User avatar"
  className="h-10 w-10 rounded-md object-cover"
/>`,
    preview: (
      <img
        src="https://i.pravatar.cc/150?img=10"
        alt="User avatar"
        className="h-10 w-10 rounded-md object-cover"
      />
    ),
    state : "stateless"
  },
  {
    id: "group",
    name: "Avatar Group",
    code: `<div className="flex -space-x-3">
  <img src="..." className="h-10 w-10 rounded-full border-2 border-background object-cover" />
  <img src="..." className="h-10 w-10 rounded-full border-2 border-background object-cover" />
  <img src="..." className="h-10 w-10 rounded-full border-2 border-background object-cover" />
  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-foreground">
    +5
  </div>
</div>`,
    preview: (
      <div className="flex -space-x-3">
        <img
          src="https://i.pravatar.cc/150?img=11"
          alt="User 1"
          className="h-10 w-10 rounded-full border-2 border-background object-cover"
        />
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User 2"
          className="h-10 w-10 rounded-full border-2 border-background object-cover"
        />
        <img
          src="https://i.pravatar.cc/150?img=13"
          alt="User 3"
          className="h-10 w-10 rounded-full border-2 border-background object-cover"
        />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-foreground">
          +5
        </div>
      </div>
    ),
    state : "stateless"
  },
  {
    id: "with-name",
    name: "Avatar with Name",
    code: `<div className="flex items-center gap-3">
  <img
    src="https://i.pravatar.cc/150?img=14"
    alt="John Doe"
    className="h-10 w-10 rounded-full object-cover"
  />
  <div>
    <p className="text-sm font-medium text-foreground">John Doe</p>
    <p className="text-xs text-foreground/50">Software Engineer</p>
  </div>
</div>`,
    preview: (
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=14"
          alt="John Doe"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-foreground">John Doe</p>
          <p className="text-xs text-foreground/50">Software Engineer</p>
        </div>
      </div>
    ),
    state : "stateless"
  },
  {
    id: "with-badge",
    name: "Avatar with Badge",
    code: `<div className="relative inline-block">
  <img
    src="https://i.pravatar.cc/150?img=15"
    alt="User avatar"
    className="h-12 w-12 rounded-full object-cover"
  />
  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
    3
  </span>
</div>`,
    preview: (
      <div className="relative inline-block">
        <img
          src="https://i.pravatar.cc/150?img=15"
          alt="User avatar"
          className="h-12 w-12 rounded-full object-cover"
        />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
          3
        </span>
      </div>
    ),
    state : "stateless"
  },
  {
    id: "colored-initials",
    name: "Colored Initial Avatars",
    code: `<div className="flex gap-2">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">AB</div>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white">CD</div>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-sm font-medium text-white">EF</div>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">GH</div>
</div>`,
    preview: (
      <div className="flex gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
          AB
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white">
          CD
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-sm font-medium text-white">
          EF
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
          GH
        </div>
      </div>
    ),
    state : "stateless"
  },
  {
    id: "profile-card",
    name: "Profile Card Avatar",
    code: `<div className="flex flex-col items-center rounded-lg border border-border/20 bg-background p-6">
  <img
    src="https://i.pravatar.cc/150?img=16"
    alt="Jane Smith"
    className="h-20 w-20 rounded-full object-cover"
  />
  <h3 className="mt-4 text-sm font-medium text-foreground">Jane Smith</h3>
  <p className="text-xs text-foreground/50">Product Designer</p>
  <div className="mt-4 flex gap-2">
    <button className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background">
      Follow
    </button>
    <button className="rounded-md border border-border/20 px-3 py-1.5 text-xs font-medium text-foreground">
      Message
    </button>
  </div>
</div>`,
    preview: (
      <div className="flex flex-col items-center rounded-lg border border-border/20 bg-background p-6">
        <img
          src="https://i.pravatar.cc/150?img=16"
          alt="Jane Smith"
          className="h-20 w-20 rounded-full object-cover"
        />
        <h3 className="mt-4 text-sm font-medium text-foreground">Jane Smith</h3>
        <p className="text-xs text-foreground/50">Product Designer</p>
        <div className="mt-4 flex gap-2">
          <button className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background">
            Follow
          </button>
          <button className="rounded-md border border-border/20 px-3 py-1.5 text-xs font-medium text-foreground">
            Message
          </button>
        </div>
      </div>
    ),
    state : "stateless"
  },
];
