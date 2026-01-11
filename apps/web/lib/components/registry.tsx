import { ComponentEntry } from "./types";

/**
 * Buttons Component Preview
 */
const ButtonsPreview = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <button className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
      Primary
    </button>
    <button className="rounded-full border border-border/20 px-4 py-2 text-xs font-medium text-foreground">
      Secondary
    </button>
  </div>
);

/**
 * Inputs Component Preview
 */
const InputsPreview = () => (
  <div className="flex w-full flex-col gap-2">
    <input
      type="text"
      placeholder="Enter email..."
      className="w-full rounded-lg border border-border/10 bg-muted px-3 py-2 text-xs text-foreground placeholder:text-foreground/50 focus:outline-none"
    />
    <input
      type="text"
      defaultValue="john@email.com"
      className="w-full rounded-lg border border-border/20 px-3 py-2 text-xs text-foreground focus:outline-none"
    />
  </div>
);

/**
 * Toggle Component Preview
 */
const TogglePreview = () => (
  <div className="flex items-center gap-3">
    <div className="relative h-6 w-10 rounded-full bg-foreground">
      <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-card" />
    </div>
    <span className="text-xs text-foreground/60">Enabled</span>
  </div>
);

/**
 * Checkbox Component Preview
 */
const CheckboxPreview = () => (
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2">
      <div className="flex h-4 w-4 items-center justify-center rounded border-2 border-border bg-foreground">
        <svg
          className="h-2.5 w-2.5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-xs text-foreground/70">Selected</span>
    </label>
    <label className="flex items-center gap-2">
      <div className="h-4 w-4 rounded border-2 border-border/20" />
      <span className="text-xs text-foreground/60">Unselected</span>
    </label>
  </div>
);

/**
 * Cards Component Preview
 */
const CardsPreview = () => (
  <div className="w-full rounded-lg border border-border/10 bg-muted p-3">
    <div className="mb-2 h-2 w-16 rounded bg-foreground/20" />
    <div className="h-2 w-full rounded bg-foreground/10" />
    <div className="mt-1 h-2 w-3/4 rounded bg-foreground/10" />
  </div>
);

/**
 * Accordion Component Preview
 */
const AccordionPreview = () => (
  <div className="w-full">
    <div className="flex items-center justify-between border-b border-border/10 py-2">
      <span className="text-xs font-medium text-foreground">Section 1</span>
      <span className="text-foreground/60">−</span>
    </div>
    <div className="py-2 text-[10px] text-foreground/70">
      Content goes here...
    </div>
    <div className="flex items-center justify-between border-b border-border/10 py-2">
      <span className="text-xs font-medium text-foreground">Section 2</span>
      <span className="text-foreground/60">+</span>
    </div>
  </div>
);

/**
 * Slider Component Preview
 */
const SliderPreview = () => (
  <div className="flex w-full flex-col items-center gap-2">
    <span className="text-lg font-light text-foreground">75%</span>
    <div className="h-1 w-full rounded-full bg-foreground/10">
      <div className="h-1 w-3/4 rounded-full bg-foreground" />
    </div>
  </div>
);

/**
 * Badges Component Preview
 */
const BadgesPreview = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-medium text-white">
      New
    </span>
    <span className="rounded-full border border-border/20 px-3 py-1 text-[10px] font-medium text-foreground">
      Beta
    </span>
    <span className="rounded-full bg-foreground/10 px-3 py-1 text-[10px] font-medium text-foreground/70">
      Soon
    </span>
  </div>
);

/**
 * Modal Component Preview
 */
const ModalPreview = () => (
  <div className="w-full rounded-lg border border-border/10 bg-card p-3 shadow-lg">
    <div className="mb-2 flex items-center justify-between">
      <div className="h-2 w-12 rounded bg-foreground/20" />
      <span className="text-foreground/60">×</span>
    </div>
    <div className="h-2 w-full rounded bg-foreground/10" />
    <div className="mt-3 flex justify-end gap-2">
      <div className="h-4 w-12 rounded bg-foreground/10" />
      <div className="h-4 w-12 rounded bg-foreground" />
    </div>
  </div>
);

/**
 * Avatar Component Preview
 */
const AvatarPreview = () => (
  <div className="flex items-center gap-2">
    <div className="h-10 w-10 rounded-full bg-foreground" />
    <div className="h-10 w-10 rounded-full bg-foreground/60" />
    <div className="h-10 w-10 rounded-full bg-foreground/30" />
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-border/20">
      <span className="text-xs text-foreground/60">+</span>
    </div>
  </div>
);

/**
 * Tabs Component Preview
 */
const TabsPreview = () => (
  <div className="w-full">
    <div className="flex border-b border-border/10">
      <div className="border-b-2 border-border px-3 py-2 text-xs font-medium text-foreground">
        Tab 1
      </div>
      <div className="px-3 py-2 text-xs text-foreground/60">Tab 2</div>
      <div className="px-3 py-2 text-xs text-foreground/60">Tab 3</div>
    </div>
    <div className="py-3 text-[10px] text-foreground/70">Tab content...</div>
  </div>
);

/**
 * Dropdown Component Preview
 */
const DropdownPreview = () => (
  <div className="w-full">
    <div className="flex items-center justify-between rounded-lg border border-border/10 px-3 py-2">
      <span className="text-xs text-foreground/60">Select option</span>
      <span className="text-foreground/60">▾</span>
    </div>
  </div>
);

/**
 * Component Registry
 *
 * This is the single source of truth for all components.
 * To add a new component:
 * 1. Create the preview component above
 * 2. Add a new entry to this array with all required metadata
 * 3. The component will automatically appear in the grid and have its own page
 */
export const componentRegistry: ComponentEntry[] = [
  {
    slug: "buttons",
    title: "Buttons",
    description: "Primary, secondary, ghost, and icon buttons",
    longDescription:
      "A collection of button components with various styles including primary, secondary, ghost, outline, and icon variants. All buttons are fully accessible and support different sizes and states.",
    category: "Interactive",
    isAvailable: true,
    tags: ["button", "cta", "action", "click", "interactive"],
    version: "1.0.0",
    preview: <ButtonsPreview />,
  },
  {
    slug: "inputs",
    title: "Inputs",
    description: "Text inputs, textareas, and form fields",
    longDescription:
      "Form input components including text inputs, textareas, search fields, and specialized inputs like email and password. Each input supports validation states, labels, and helper text.",
    category: "Forms",
    isAvailable: true,
    tags: ["input", "form", "text", "field", "textarea"],
    version: "1.0.0",
    preview: <InputsPreview />,
  },
  {
    slug: "toggle",
    title: "Toggle",
    description: "Switches and toggles for settings",
    longDescription:
      "Toggle switch components for binary choices. Perfect for settings pages, preferences, and any on/off functionality. Includes various sizes and label positions.",
    category: "Interactive",
    isAvailable: true,
    tags: ["toggle", "switch", "settings", "boolean", "on-off"],
    version: "1.0.0",
    preview: <TogglePreview />,
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    description: "Checkboxes and radio buttons",
    longDescription:
      "Checkbox and radio button components for multi-select and single-select options. Supports indeterminate state, disabled state, and custom styling.",
    category: "Forms",
    isAvailable: true,
    tags: ["checkbox", "radio", "form", "select", "choice"],
    version: "1.0.0",
    preview: <CheckboxPreview />,
  },
  {
    slug: "cards",
    title: "Cards",
    description: "Content cards with various layouts",
    longDescription:
      "Versatile card components for displaying content. Includes variants for product cards, profile cards, stats cards, and more. All cards are responsive and customizable.",
    category: "Layout",
    isAvailable: true,
    tags: ["card", "container", "layout", "content", "box"],
    version: "1.0.0",
    preview: <CardsPreview />,
  },
  {
    slug: "accordion",
    title: "Accordion",
    description: "Collapsible content sections",
    longDescription:
      "Accordion components for organizing content into collapsible sections. Supports single and multiple open panels, custom icons, and animated transitions.",
    category: "Interactive",
    isAvailable: true,
    tags: ["accordion", "collapse", "expand", "faq", "disclosure"],
    version: "1.0.0",
    preview: <AccordionPreview />,
  },
  {
    slug: "slider",
    title: "Slider",
    description: "Range sliders and progress bars",
    longDescription:
      "Slider and range input components for selecting values within a range. Includes single and dual thumb variants, step markers, and value labels.",
    category: "Interactive",
    isAvailable: true,
    tags: ["slider", "range", "progress", "input", "value"],
    version: "1.0.0",
    preview: <SliderPreview />,
  },
  {
    slug: "badges",
    title: "Badges",
    description: "Status indicators and labels",
    longDescription:
      "Badge components for displaying status, counts, or labels. Available in various colors and sizes. Perfect for notifications, tags, and status indicators.",
    category: "Display",
    isAvailable: true,
    tags: ["badge", "tag", "label", "status", "indicator"],
    version: "1.0.0",
    preview: <BadgesPreview />,
  },
  {
    slug: "modal",
    title: "Modal",
    description: "Dialog boxes and overlays",
    longDescription:
      "Modal and dialog components for displaying content that requires user attention. Includes confirmation dialogs, form modals, and full-screen variants with proper focus management.",
    category: "Overlay",
    isAvailable: true,
    tags: ["modal", "dialog", "popup", "overlay", "alert"],
    version: "1.0.0",
    preview: <ModalPreview />,
  },
  {
    slug: "avatar",
    title: "Avatar",
    description: "User avatars and profile images",
    longDescription:
      "Avatar components for displaying user profile images. Supports image, initials, and icon variants. Includes avatar groups and status indicators.",
    category: "Display",
    isAvailable: true,
    tags: ["avatar", "profile", "user", "image", "picture"],
    version: "1.0.0",
    preview: <AvatarPreview />,
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Tabbed navigation and content",
    longDescription:
      "Tab components for organizing content into switchable panels. Supports horizontal and vertical orientations, icons, and disabled states.",
    category: "Navigation",
    isAvailable: true,
    tags: ["tabs", "navigation", "panel", "switch", "content"],
    version: "1.0.0",
    preview: <TabsPreview />,
  },
  {
    slug: "dropdown",
    title: "Dropdown",
    description: "Dropdown menus and selects",
    longDescription:
      "Dropdown and select components for choosing from a list of options. Includes searchable dropdowns, multi-select, and custom option rendering.",
    category: "Navigation",
    isAvailable: true,
    tags: ["dropdown", "select", "menu", "options", "choice"],
    version: "1.0.0",
    preview: <DropdownPreview />,
  },
];

/**
 * Get all components from the registry
 */
export function getAllComponents(): ComponentEntry[] {
  return componentRegistry;
}

/**
 * Get available components only
 */
export function getAvailableComponents(): ComponentEntry[] {
  return componentRegistry.filter((c) => c.isAvailable);
}

/**
 * Get a component by its slug
 */
export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return componentRegistry.find((c) => c.slug === slug);
}

/**
 * Get components by category
 */
export function getComponentsByCategory(
  category: ComponentEntry["category"]
): ComponentEntry[] {
  return componentRegistry.filter((c) => c.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): ComponentEntry["category"][] {
  return [...new Set(componentRegistry.map((c) => c.category))];
}

/**
 * Get all component slugs (useful for static generation)
 */
export function getAllComponentSlugs(): string[] {
  return componentRegistry.map((c) => c.slug);
}

/**
 * Search components by query
 */
export function searchComponents(query: string): ComponentEntry[] {
  const lowerQuery = query.toLowerCase();
  return componentRegistry.filter(
    (c) =>
      c.title.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.tags.some((tag) => tag.includes(lowerQuery))
  );
}
