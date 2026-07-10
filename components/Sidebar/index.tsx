"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { PanelLeft, PanelRight } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import { getDefaultOpenItem, SIDEBARCONTENTITEMS } from "./items";
import { Label } from "../ui/label";
import SidebarNode from "./components/sidebarNode";
import { User } from "@/type";
import { UserMenu } from "@/components/menuUser/userMenu";
import { UserButton } from "@/components/menuUser/userButton";
import { handleLogout } from "@/lib/logout";

interface SidebarIndexProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
}

const SidebarComponents = ({ open, setOpen, user }: SidebarIndexProps) => {
  const currentPathname = usePathname();
  const defaultOpenItem = getDefaultOpenItem(currentPathname);
  const [openItems, setOpenItems] = useState<string[]>(
    defaultOpenItem ? [defaultOpenItem] : [],
  );
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseLeave={() => {
        if (isHover) {
          setOpen(false);
        }
      }}
    >
      <Sidebar className="my-2 transition-all">
        {!open ? (
          <div className="flex justify-center">
            <Button
              variant="default"
              size="icon"
              className="size-8"
              onClick={() => {
                setOpen(true);
                setIsHover(false);
                setOpenItems(defaultOpenItem ? [defaultOpenItem] : []);
              }}
            >
              <PanelLeft className="size-5" />
            </Button>
          </div>
        ) : (
          !isHover && (
            <div className="flex justify-end">
              <Button
                variant="default"
                size="icon"
                className="size-8 mr-2"
                onClick={() => {
                  setOpen(false);
                  setIsHover(false);
                }}
              >
                <PanelRight className="size-5" />
              </Button>
            </div>
          )
        )}

        <SidebarContent>
          {SIDEBARCONTENTITEMS.map((group) => (
            <div key={group.id} className={`px-2 ${!open ? "mx-auto" : ""}`}>
              <Label className="text-xs">{group.topic}</Label>

              {group.items.map((item) => (
                <SidebarNode
                  key={item.id}
                  item={item}
                  isCollapse={!open}
                  open={open}
                  setOpen={setOpen}
                  isHover={isHover}
                  setIsHover={setIsHover}
                  openItems={openItems}
                  setOpenItems={setOpenItems}
                  currentPathname={currentPathname}
                />
              ))}
            </div>
          ))}
        </SidebarContent>

        <SidebarFooter className="border-t p-2">
          <UserMenu user={user} onLogout={handleLogout}>
            <UserButton user={user} open={true} />
          </UserMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default SidebarComponents;
