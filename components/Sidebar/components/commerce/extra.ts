import { SidebarItem } from "@/components/Sidebar/types";

export const commerceExtraSidebar: SidebarItem = {
  id: 405,

  title: "Extra Management",

  icon: "circle_plus",

  categories: [
    {
      id: 305,
      name: "Extra",
      link: "/commerce/extra/main",
    },
  ],

  children: [
    {
      id: 406,
      title: "Extra Type",
      icon: "tags",
      categories: [
        {
          id: 306,
          name: "Extra Type",
          link: "/commerce/extra/extra-type",
        },
      ],
    },
    {
      id: 407,
      title: "Extra Fee Type",
      icon: "badge_dollar_sign",
      categories: [
        {
          id: 307,
          name: "Extra Fee Type",
          link: "/commerce/extra/extra-fee-type",
        },
      ],
    },
  ],
};