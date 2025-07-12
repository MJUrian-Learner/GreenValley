import { Button } from "@/components/ui/button";
import React from "react";

function CTA() {
  return (
    <section className="min-h-fit bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95">
      <div className="container py-20 flex flex-col gap-12">
        <div className="text-center w-4/12 mx-auto space-y-8 text-background">
          <div className="space-y-4">
            <h2 className="text-3xl font-boldtracking-wide font-serif">
              Start Your Reservation Now
            </h2>
            <p>
              Book your next stay with us and enjoy a comfortable and memorable
              experience.
            </p>
          </div>
          <Button
            variant="secondary"
            className="px-12 py-6 text-lg bg-accent rounded-xl hover:bg-accent/95 shadow-md"
          >
            Select Date &amp; Time
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
