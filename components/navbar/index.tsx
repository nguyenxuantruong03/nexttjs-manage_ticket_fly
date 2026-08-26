"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { SIDEBARCONTENTITEMS } from "@/components/Sidebar/items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User } from "@/types/users/auth/users";
import { UserMenu } from "@/components/menuUser/userMenu";
import { UserButton } from "../menuUser/userButton";
import { handleLogout } from "@/lib/logout";
import { SIDEBARCONTENTICONS } from "../Sidebar/icon";
interface NavbarProps {
  user: User;
}

const Navbar = ({ user }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile & Tablet */}
      <header className="fixed inset-x-0 top-0 z-50 h-14 border-b bg-background lg:hidden">
        <div className="flex h-full items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Logo</h1>
          <div className="flex items-center space-x-4">
            <UserMenu user={user} onLogout={handleLogout}>
              <UserButton user={user} avatarOnly />
            </UserMenu>

            <Popover>
              <PopoverTrigger asChild>
                <Button size="icon">
                  <Menu className="size-8" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                className="w-[320px] overflow-hidden rounded-2xl border p-0 shadow-xl"
              >
                <div className="max-h-[75vh] overflow-y-auto">
                  {SIDEBARCONTENTITEMS.map((group) => (
                    <section key={group.id}>
                      <div className="sticky top-0 border-b bg-muted/60 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
                        {group.topic}
                      </div>

                      <Accordion type="multiple" className="px-3 py-2">
                        {group.items.map((item) => {
                          const Icon = SIDEBARCONTENTICONS[item.icon];

                          return (
                            <AccordionItem
                              key={item.id}
                              value={String(item.id)}
                              className="border-b-0"
                            >
                              <AccordionTrigger className="rounded-xl px-3 py-3 hover:bg-accent hover:no-underline">
                                <div className="flex items-center gap-3">
                                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                    {Icon && <Icon className="size-5" />}
                                  </div>

                                  <span className="text-sm font-medium">
                                    {item.title}
                                  </span>
                                </div>
                              </AccordionTrigger>

                              <AccordionContent>
                                <div className="mt-1 ml-12 flex flex-col gap-1">
                                  {item.categories?.map((category) => {
                                    const active = pathname === category.link;

                                    return (
                                      <Link
                                        key={category.id}
                                        href={category.link}
                                        className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                                          active
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                        }`}
                                      >
                                        {category.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </section>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
