import { SidebarItem } from "@/components/Sidebar/types";

export const commercePromotionSidebar: SidebarItem = {
  id: 408,

  title: "Promotion Management",

  icon: "badge_percent",

  categories: [
    {
      id: 308,
      name: "Promotion",
      link: "/commerce/promotion/main",
    },
  ],

  children: [
    {
      id: 409,
      title: "Promotion Rule",
      icon: "git_branch",
      categories: [
        {
          id: 309,
          name: "Promotion Rule",
          link: "/commerce/promotion/promotion-rule",
        },
      ],
    },
  ],
};