"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
<<<<<<< Updated upstream
};
=======
});

export default Button;

/* Notes:
- If you want Framer Motion micro-interactions, replace the <button> root with a motion.button
  and add an onTap/whileHover scale. Example (not included to avoid adding a required dependency):

  import { motion } from 'framer-motion';
  const MotionButton = motion(button);
  <MotionButton whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }} ... />

- The color tokens (neutral-*) use Tailwind default palette. To theme, modify Tailwind config or
  override with className (e.g. className="bg-primary text-primary-foreground").
*/
>>>>>>> Stashed changes
