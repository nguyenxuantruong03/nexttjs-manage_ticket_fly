import { SidebarItem } from "@/components/Sidebar/types";

export const catalogTypeSidebar: SidebarItem[] = [
  // ======================================================
  // FUEL TYPE
  // ======================================================

  {
    id: 301,
    title: "Fuel Type",
    icon: "fuel",
    categories: [
      {
        id: 201,
        name: "Fuel Type",
        link: "/catalog/fuel-type",
      },
    ],
  },

  // ======================================================
  // ROUTE TYPE
  // ======================================================

  {
    id: 302,
    title: "Route Type",
    icon: "route",
    categories: [
      {
        id: 202,
        name: "Route Type",
        link: "/catalog/route-type",
      },
    ],
  },

  // ======================================================
  // SERVICE TYPE
  // ======================================================

  {
    id: 303,
    title: "Service Type",
    icon: "concierge_bell",
    categories: [
      {
        id: 203,
        name: "Service Type",
        link: "/catalog/service-type",
      },
    ],
  },

  // ======================================================
  // VEHICLE TYPE
  // ======================================================

  {
    id: 304,
    title: "Vehicle Type",
    icon: "car",
    categories: [
      {
        id: 204,
        name: "Vehicle Type",
        link: "/catalog/vehicle-type",
      },
    ],
  },

  // ======================================================
  // MEDIA ASSET
  // ======================================================

  {
    id: 305,
    title: "Media Asset",
    icon: "image",
    categories: [
      {
        id: 205,
        name: "Media Asset",
        link: "/catalog/media-asset",
      },
    ],
  },

  // ======================================================
  // MEDIA CATEGORY
  // ======================================================

  {
    id: 306,
    title: "Media Category",
    icon: "images",
    categories: [
      {
        id: 206,
        name: "Media Category",
        link: "/catalog/media-category",
      },
    ],
  },

  {
    id: 307,

    title: "Reason",

    icon: "message_circle_question_mark",

    // categories: [
    //   {
    //     id: 308,
    //     name: "Reason",
    //     link: "/commerce/extra/main",
    //   },
    // ],

    children: [
      {
        id: 406,
        title: "Reason Code",
        icon: "message_circle_warning",
        categories: [
          {
            id: 306,
            name: "Reason Code",
            link: "/catalog/reason/reason-code",
          },
        ],
      },
      {
        id: 407,
        title: "Reason Context",
        icon: "message_circle_more",
        categories: [
          {
            id: 307,
            name: "Reason Context",
            link: "/catalog/reason/reason-context",
          },
        ],
      },
    ],
  },
];
