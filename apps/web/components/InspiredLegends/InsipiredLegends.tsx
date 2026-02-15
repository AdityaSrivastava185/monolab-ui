import React from "react";

const InsipiredLegends = () => {
  return (
    <section className="mt-24 flex flex-col items-center text-center gap-4 px-4">
      <span className="inline-flex items-center justify-center rounded-full border border-transparent px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden text-secondary-foreground [a&]:hover:bg-secondary/90 bg-muted">
        inspired by Legends
      </span>

      <h2 className="text-primary leading-tighter text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
        inspired Legends
      </h2>

      <p className="text-foreground mx-auto max-w-4xl text-base text-balance sm:text-lg">
        the platform's design is inspired by legendary figures and their
        stories. By drawing inspiration from these legends we aim to create a
        design that is visually appealing, functional and easy to use.
      </p>
    </section>
  );
};

export default InsipiredLegends;
