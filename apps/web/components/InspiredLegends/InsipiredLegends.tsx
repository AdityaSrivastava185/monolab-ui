import React from "react";
import { Heart } from "lucide-react";

const InsipiredLegends = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-1.5">
            <Heart className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-xs font-medium text-muted-foreground">
              Standing on shoulders of giants
            </span>
          </div>

          {/* Title */}
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Inspired by legends
          </h2>

          {/* Description */}
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Our design philosophy draws from the best in the ecosystem. We stand
            on the shoulders of these incredible projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsipiredLegends;
