import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { SidebarItem } from "../types";
import { Button } from "@/components/ui/button";
import { SIDEBARCONTENTICONS } from "../icon";

interface SidebarNodeProps {
  item: SidebarItem;
  isCollapse?: boolean;

  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;

  setIsHover?: Dispatch<SetStateAction<boolean>>;
  isHover?: boolean;

  openItems: string[];
  setOpenItems: Dispatch<SetStateAction<string[]>>;

  currentPathname: string;
}

const SidebarNode = ({
  item,
  isCollapse = false,
  open,
  setOpen,

  setIsHover,
  isHover,

  openItems,
  setOpenItems,

  currentPathname,
}: SidebarNodeProps) => {
  const IconComp = SIDEBARCONTENTICONS[item.icon];

  const currentLink = item.categories?.some(
    (category) => category.link === currentPathname,
  );

  /**
   * Collapse sidebar:
   * Hover icon -> mở sidebar + mở đúng node
   */
  const renderButton = () => (
    <Button
      variant="ghost"
      size="icon"
      onMouseEnter={() => {
        setOpen?.(true);
        setIsHover?.(true);

        /**
         * mở node hiện tại
         */
        setOpenItems([String(item.id)]);
      }}
      className={currentLink ? "text-custom-root" : ""}
    >
      {IconComp && <IconComp className="w-5 h-5" />}
    </Button>
  );

  const renderAccordionItem = () => (
    <AccordionItem value={String(item.id)} className="border-none">
      <AccordionTrigger
        className={`
          py-2
          hover:no-underline
          flex
          items-center
          justify-between
          px-2

          ${currentLink ? "text-custom-darkroot" : ""}
        `}
      >
        <div className="flex items-center gap-2">
          {IconComp && <IconComp className="w-5 h-5" />}

          <span>{item.title}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pb-0">
        {item.categories?.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className={`
                  flex
                  items-center
                  ml-8
                  py-1.5
                  text-sm
                  hover:text-custom-root

                  ${
                    currentPathname === category.link
                      ? "text-custom-root font-medium"
                      : ""
                  }
                `}
          >
            {category.name}
          </Link>
        ))}

        {item.children && (
          <div
            className="
                ml-5
                pl-3
                border-l
                border-muted
              "
          >
            {item.children.map((child) => (
              <SidebarNode
                key={child.id}
                item={child}
                isCollapse={false}
                open={open}
                setOpen={setOpen}
                setIsHover={setIsHover}
                isHover={isHover}
                openItems={openItems}
                setOpenItems={setOpenItems}
                currentPathname={currentPathname}
              />
            ))}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );

  /**
   * Luôn dùng multiple
   * vì tree có nhiều tầng
   */
  return (
    <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
      {isCollapse ? renderButton() : renderAccordionItem()}
    </Accordion>
  );
};

export default SidebarNode;
