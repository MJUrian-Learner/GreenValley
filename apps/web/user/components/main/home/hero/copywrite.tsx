import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

function Copywrite() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-primary font-medium">
          Trusted by 500+ Residents
        </span>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-primary rounded-full" />
          <span className="text-sm tracking-tight font-medium text-muted-foreground">
            24 residents viewing now
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-bold text-red">
          Reserve Barangay
          <br />
          Facilities <span className="text-primary">Instantly</span>
        </h1>
        <p className="text-muted-foreground">
          Book community halls, sports courts, and more with just a few clicks.
          <br />
          Convenient online payment and instant QR ticketing for all residents.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button size="lg" className="px-6!">
          <Calendar className="size-4" />
          Book Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border border-primary! text-primary px-6 hover:bg-primary! hover:text-background!"
        >
          Check Availability
        </Button>
      </div>
    </section>
  );
}

export default Copywrite;
