"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu className="sticky top-0 z-10 bg-white dark:bg-slate-950 border-b p-4 max-w-full flex justify-between items-center">
      <Link href="/docs" className="font-semibold text-lg">
        SkillShop
      </Link>

      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/jobs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Job Listings
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navbar;
