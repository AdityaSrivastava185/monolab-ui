import React from "react";

const InsipiredLegends = () => {
  return (
    <section className="mt-12 flex flex-col items-center text-center gap-4 px-4">
      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
        Inspired by Legends
      </span>

      <h2 className="text-2xl md:text-3xl font-semibold text-foreground/70">
        Inspired Legends
      </h2>

      <p className="max-w-lg text-sm md:text-base text-foreground leading-relaxed">
        The platform's design is inspired by legendary figures and their
        stories. By drawing inspiration from these legends we aim to create a
        design that is visually appealing, functional and easy to use.
      </p>
    </section>
  );
};

export default InsipiredLegends;
