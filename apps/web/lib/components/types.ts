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
}

/**
 * Component registry entry with preview
 */
export interface ComponentEntry extends ComponentMeta {
  /** Preview component to render in cards */
  preview: ReactNode;
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
