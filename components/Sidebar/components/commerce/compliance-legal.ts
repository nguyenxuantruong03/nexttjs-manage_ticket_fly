import { SidebarItem } from "@/components/Sidebar/types";

export const complianceLegalSidebar: SidebarItem = {
  id: 500,

  title: "Compliance & Legal",

  icon: "scale",

  children: [
    {
      id: 501,
      title: "Legal Document",
      icon: "file_text",
      categories: [
        {
          id: 351,
          name: "Legal Document",
          link: "/commerce/compliance-legal/legal-document",
        },
      ],
    },
    {
      id: 502,
      title: "Regulation",
      icon: "scale",
      categories: [
        {
          id: 352,
          name: "Regulation",
          link: "/commerce/compliance-legal/regulation",
        },
      ],
    },
    {
      id: 503,
      title: "Regulation Category",
      icon: "folder_tree",
      categories: [
        {
          id: 353,
          name: "Regulation Category",
          link: "/commerce/compliance-legal/regulation-category",
        },
      ],
    },
    {
      id: 504,
      title: "Tax Rule",
      icon: "receipt",
      categories: [
        {
          id: 354,
          name: "Tax Rule",
          link: "/commerce/compliance-legal/tax-rule",
        },
      ],
    },
  ],
};
