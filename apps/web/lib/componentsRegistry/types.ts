import { ReactNode } from "react";

/**
 * Component category types
 */
export type ComponentCategory =
  | "Interactive"
  | "Forms"
  | "Layout"
  | "Navigation"
  | "Display"
  | "Overlay"
  | "Feedback";

/**
 * Component variant for grid display
 */
export interface ComponentVariant {
  /** Unique ID for the variant */
  id: string;
  /** Variant name (optional, for accessibility) */
  name?: string;
  /** The rendered preview */
  preview: ReactNode;
  /** Source code for copying */
  code: string;
  /** State description (e.g., "stateless", "stateful") */
  state: "stateless" | "stateful";
}

/**
 * Component metadata interface
 * This is the core interface for defining components in the registry
 */
export interface ComponentMeta {
  /** Unique slug used for routing (e.g., "buttons", "inputs") */
  slug: string;
  /** Display title (e.g., "Buttons", "Inputs") */
  title: string;
  /** Short description for cards */
  description: string;
  /** Detailed description for component page */
  longDescription: string;
  /** Component category for filtering */
  category: ComponentCategory;
  /** Whether the component is available */
  isAvailable: boolean;
  /** Tags for search/filtering */
  tags: string[];
  /** Version when this component was added */
  version: string;
  /** Whether the component is coming soon */
  comingSoon?: boolean;
}

/**
 * Component registry entry with preview
 */
export interface ComponentEntry extends ComponentMeta {
  /** Preview component to render in cards */
  preview: ReactNode;
  /** Component variants for the detail page grid */
  variants?: ComponentVariant[];
  /** Full component examples for the detail page */
  examples?: ComponentExample[];
}

/**
 * Component example for detail pages
 */
export interface ComponentExample {
  /** Example title */
  title: string;
  /** Example description */
  description?: string;
  /** The rendered preview */
  preview: ReactNode;
  /** Source code for copying */
  code: string;
}
