"use client";

import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const currentPath = usePathname();

  const isActive = (href: string) => currentPath === href;

  return (
    <header id="header" className="bg-background border-b-2 border-b-muted ">
      <div className="bg-accent text-neutral py-2 px-4 text-center text-sm font-medium">
        📢 Notice: Community Hall will be closed for maintenance June 20-22,
        2025
      </div>
      <nav className="container flex items-center justify-between py-4">
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
      </nav>
    </header>
  );
}

export default Header;
