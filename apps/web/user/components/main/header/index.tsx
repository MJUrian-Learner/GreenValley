"use client";

import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const currentPath = usePathname();

  const isActive = (href: string) => currentPath === href;

  return (
    <header className="bg-background border border-b-muted py-4">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <MapPin className="size-8 text-background bg-primary rounded-lg p-1" />
            <h1 className="text-lg font-bold tracking-tight">
              Barangay Facilities
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            {MENU_ITEMS.map((item) => (
              <li
                key={item.label}
                className={cn(
                  "hover:text-primary hover:underline underline-offset-3 rounded-md px-2 py-1",
                  isActive(item.href) &&
                    "text-primary underline pointer-events-none"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
