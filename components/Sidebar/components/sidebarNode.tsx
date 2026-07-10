import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { SidebarItem } from "../types";
import { SIDEBARCONTENTICONS } from "../items";
import { Button } from "@/components/ui/button";

const SidebarNode = ({
  item,
  isCollapse = false,
  open,
  setOpen,
  setIsHover,
  isHover,
  setOpenItems,
  openItems,
  currentPathname,
}: {
  item: SidebarItem;
  isCollapse?: boolean;
  open: boolean;
  setOpen?: (open: boolean) => void;
  setIsHover?: Dispatch<SetStateAction<boolean>>;
  isHover?: boolean;
  setOpenItems: Dispatch<SetStateAction<string[]>>;
  openItems: string[];
  currentPathname: string;
}) => {
  const IconComp = SIDEBARCONTENTICONS[item.icon];

  const currentLink = item.categories?.some(
    (category) => category.link === currentPathname,
  );

  const handleMouseEnter = () => {
    if (!isHover) return;

    setOpenItems([String(item.id)]);
  };

  const handleMouseLeave = () => {
    if (!isHover) return;

    setOpenItems(openItems.length ? [openItems[0]] : []);
  };

  const renderButton = () => (
    <Button
      variant="ghost"
      size="icon"
      onMouseEnter={() => {
        setOpen?.(true);
        setIsHover?.(true);
      }}
      className={currentLink ? "text-custom-root" : ""}
    >
      {IconComp && <IconComp className="w-5 h-5" />}
    </Button>
  );

  const renderAccordionItem = () => (
    <AccordionItem
      value={String(item.id)}
      onMouseEnter={open && !isHover ? undefined : handleMouseEnter}
      onMouseLeave={open && !isHover ? undefined : handleMouseLeave}
    >
      <AccordionTrigger>
        <div
          className={`flex items-center gap-2 ${
            currentLink ? "text-custom-darkroot" : ""
          }`}
        >
          {IconComp && <IconComp className="w-5 h-5" />}
          {item.title}
        </div>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col">
        {item.categories?.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className={`ml-8 py-1 cursor-pointer ${
              currentPathname === category.link ? "text-custom-root" : ""
            }`}
          >
            {category.name}
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );

  const accordionProps =
    open && !isHover
      ? {
          type: "multiple" as const,
          value: openItems,
          onValueChange: setOpenItems,
        }
      : {
          type: "single" as const,
          value: openItems[0],
          collapsible: true,
          onValueChange: (value: string) => setOpenItems(value ? [value] : []),
        };

  return (
    <Accordion {...accordionProps}>
      {isCollapse ? renderButton() : renderAccordionItem()}
    </Accordion>
  );
};

export default SidebarNode;
