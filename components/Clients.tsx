"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <span id="highlights" className="block h-0 w-0 overflow-hidden" aria-hidden="true" />
      <h1 className="heading">
        Achievements & 
        <span className="text-purple"> Highlights</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials.map((t) => ({
              quote: t.quote,
              name: t.name,
              title: (t as any).title ?? "",
              img: t.img, // <-- add this line (make sure your testimonial object has img property)
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
