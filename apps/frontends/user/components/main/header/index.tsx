"use client";

import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { MapPin, Calendar, User, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useClerk } from "@clerk/nextjs";
import { useWebConfig } from "@/hooks/useWebConfig";

function Header({ authenticated }: { authenticated: boolean }) {
  const currentPath = usePathname();
  const { signOut } = useClerk();
  const { data } = useWebConfig();

  const isActive = (href: string) => currentPath === href;

  const handleLogout = () => {
    signOut({ redirectUrl: "/" });
  };

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
            <h1 className="text-lg font-semibold tracking-wider text-primary/90 font-serif">
              {data[0]?.website_name}
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
          {!authenticated ? (
            <>
              <Link href="/auth/sign-in">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary hover:bg-transparent! p-0!"
                  >
                    <Bell className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
                  Notifications
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary hover:bg-transparent! p-0!"
                  >
                    <Calendar className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
                  Bookings
                </TooltipContent>
              </Tooltip>

              <DropdownMenu modal={false}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary hover:bg-transparent! p-0!"
                      >
                        <User className="size-5" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center">
                    Profile
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button onClick={handleLogout}>Logout</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
