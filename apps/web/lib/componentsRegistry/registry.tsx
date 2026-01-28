import { ComponentEntry } from "./types";

// Import previews from modular files
import {
  ButtonsPreview,
  InputsPreview,
  TogglePreview,
  CheckboxPreview,
  CardsPreview,
  AccordionPreview,
  SliderPreview,
  BadgesPreview,
  ModalPreview,
  AvatarPreview,
  TabsPreview,
  DropdownPreview,
  SelectPreview,
} from "./previews";

// Import variants from modular files
import {
  buttonVariants,
  inputVariants,
  toggleVariants,
  checkboxVariants,
  badgeVariants,
  dropdownVariants,
  selectVariants,
  cardVariants,
  accordionVariants,
  avatarVariants,
} from "./variants";

/**
 * Component Registry
 *
 * This is the single source of truth for all components.
 * Previews and variants are imported from their respective folders.
 *
 * Folder Structure:
 * - /lib/components/previews/ → Card preview components
 * - /lib/components/variants/ → Variant grids for detail pages
 * - /lib/components/registry.tsx → This file (component metadata)
 * - /lib/components/types.ts → TypeScript interfaces
 *
 * To add a new component:
 * 1. Create a preview in /previews/[name].tsx
 * 2. Create variants in /variants/[name].tsx (optional)
 * 3. Export them in the respective index.ts files
 * 4. Add entry below with all metadata
 */
export const componentRegistry: ComponentEntry[] = [
  {
    slug: "buttons",
    title: "Button",
    description: "Primary, secondary, ghost, and icon buttons",
    longDescription:
      "A growing collection of 14 button components built with React and Tailwind CSS.",
    category: "Interactive",
    isAvailable: true,
    tags: ["button", "cta", "action", "click", "interactive"],
    version: "1.0.0",
    preview: <ButtonsPreview />,
    variants: buttonVariants,
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
    variants: inputVariants,
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
    variants: toggleVariants,
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
    variants: checkboxVariants,
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
    variants: cardVariants,
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
    variants: accordionVariants,
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
    comingSoon: true,
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
    variants: badgeVariants,
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
    comingSoon: true,
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
    variants: avatarVariants,
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
    comingSoon: true,
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
    variants: dropdownVariants,
  },
  {
    slug: "select",
    title: "Select",
    description: "Custom select inputs and pickers",
    longDescription:
      "Custom select components for form inputs. Includes single select, multi-select, searchable, and grouped options. Perfect for forms and filters.",
    category: "Forms",
    isAvailable: true,
    tags: ["select", "picker", "form", "input", "choice"],
    version: "1.0.0",
    preview: <SelectPreview />,
    variants: selectVariants,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

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
  category: ComponentEntry["category"],
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
      c.tags.some((tag) => tag.includes(lowerQuery)),
  );
}
