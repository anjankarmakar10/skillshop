"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { date } from "zod";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <header className="border-b ">
      <NavigationMenu className="sticky top-0 z-10 bg-white dark:bg-slate-950  p-4  max-w-[1340px] mx-auto  flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg dark:text-white">
          SkillShop
        </Link>

        <NavigationMenuList>
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/jobs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Job Listings
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {status === "unauthenticated" && (
            <NavigationMenuItem>
              <Link href="/api/auth/signin" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sign In
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {status === "authenticated" && (
            <DropdownMenu>
              <NavigationMenuItem>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{session.user?.name}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        className="flex items-center w-full"
                        href="/jobs/mylisting"
                      >
                        <List className="mr-2 h-4 w-4" />
                        <span>My Listing</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      className="flex items-center w-full"
                      href="/api/auth/signout"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </NavigationMenuItem>
            </DropdownMenu>
          )}
          {status === "loading" && (
            <NavigationMenuItem>
              <Skeleton className="h-8 w-[90px] rounded-md" />
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
export default Navbar;
