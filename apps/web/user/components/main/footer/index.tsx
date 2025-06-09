import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="bg-secondary-foreground py-10 text-background">
      <div className="container ">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="size-7 text-background bg-primary rounded-lg p-1" />
              <h1 className="text-lg font-medium tracking-wide">
                Barangay Facilities
              </h1>
            </div>
            <p className="text-sm text-muted/80 leading-relaxed">
              Making community facility reservation simple and accessible for
              all residents.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-medium tracking-wide">Quick Links</h1>
            <ul className="flex flex-col gap-2 text-muted/80 text-sm">
              <li>
                <Link href="/">Facilities</Link>
              </li>
              <li>
                <Link href="/">How it works</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-medium tracking-wide">Contact Info</h1>
            <ul className="flex flex-col gap-2 text-muted/80 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                <span>(02) 8123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>facilities@barangay.gov.ph</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>Barangay Hall, Main Street</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-medium tracking-wide">Stay Updated</h1>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="placeholder:text-muted/80 bg-muted-foreground/50! rounded-lg border-muted-foreground/50!"
              />
              <Button className="bg-accent text-foreground hover:bg-accent/80">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted/80">
              Get the latest updates and news from us.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-muted-foreground/50" />
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted/50">
            &copy; {new Date().getFullYear()} Barangay Facility Reservation
            System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
