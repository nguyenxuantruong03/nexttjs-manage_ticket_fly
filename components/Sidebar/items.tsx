import { SidebarTopic } from "./types";
import { statisticSidebar } from "./components/statistic";
import { userSidebar } from "./components/user";
import { providerSidebar } from "./components/provider";

export const SIDEBARCONTENTITEMS: SidebarTopic[] = [
  statisticSidebar,

  userSidebar,

  providerSidebar,

  {
    id: 4,
    topic: "Service",

    items: [
      {
        id: 60,
        title: "Location",
        icon: "map_pinned",
        categories: [
          {
            id: 45,
            name: "Location",
            link: "/location",
          },
        ],
        children: [
          {
            id: 52,
            title: "Country",
            icon: "map_pin_house",

            categories: [
              {
                id: 45,
                name: "Country",
                link: "/location/country",
              },
            ],

            children: [
              {
                id: 512,
                title: "Currency",
                icon: "circle_dollar_sign",

                categories: [
                  {
                    id: 143,
                    name: "Currency",
                    link: "/location/currency",
                  },
                ],
              },

              {
                id: 95,
                title: "Language",
                icon: "book_a",

                categories: [
                  {
                    id: 52,
                    name: "Language",
                    link: "/location/language",
                  },
                ],
              },

              {
                id: 96,
                title: "Timezone",
                icon: "clock",

                categories: [
                  {
                    id: 51,
                    name: "Timezone",
                    link: "/location/timezone",
                  },
                ],
              },
            ],
          },

          {
            id: 51,
            title: "City",
            icon: "building_2",

            categories: [
              {
                id: 46,
                name: "City",
                link: "/location/city",
              },
            ],

            children: [
              {
                id: 98,
                title: "District",
                icon: "map_pinned",

                categories: [
                  {
                    id: 47,
                    name: "District",
                    link: "/location/district",
                  },
                ],

                children: [
                  {
                    id: 97,
                    title: "Ward",
                    icon: "map_pinned",

                    categories: [
                      {
                        id: 48,
                        name: "Ward",
                        link: "/location/ward",
                      },
                    ],

                    children: [
                      {
                        id: 99,
                        title: "Address",
                        icon: "map_pinned",

                        categories: [
                          {
                            id: 49,
                            name: "Address",
                            link: "/location/address",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              {
                id: 94,
                title: "Place",
                icon: "map_pinned",

                categories: [
                  {
                    id: 50,
                    name: "Place",
                    link: "/location/place",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 75,
        title: "Search",
        icon: "search",
        categories: [
          {
            id: 31,
            name: "Tag",
            link: "/search/tag",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    topic: "Booking",

    items: [
      {
        id: 100,
        title: "Booking Management",
        icon: "book_a",

        children: [
          {
            id: 50,
            title: "Fly Management",
            icon: "plane",

            categories: [
              {
                id: 31,
                name: "Ticket Fly",
                link: "/ticket-fly/main",
              },
              {
                id: 37,
                name: "Fly Aiprot",
                link: "/ticket-fly/fly-airport",
              },
            ],
          },

          {
            id: 51,
            title: "Bus Management",
            icon: "bus",

            categories: [
              {
                id: 32,
                name: "Ticket Bus",
                link: "/ticket-bus",
              },
            ],
          },

          {
            id: 52,
            title: "Yacht Management",
            icon: "yacht",

            categories: [
              {
                id: 33,
                name: "Yacht",
                link: "/yacht",
              },
            ],
          },

          {
            id: 53,
            title: "Car Rental Management",
            icon: "car_taxi_front",

            categories: [
              {
                id: 34,
                name: "Car Rental",
                link: "/car_rental",
              },
            ],
          },

          /**
           * ==========================
           * BASIC
           * ==========================
           */
          {
            id: 192,
            title: "Hotel Basic",
            icon: "hotel",

            categories: [
              {
                id: 34,
                name: "All",
                link: "/hotel/main",
              },
              {
                id: 34,
                name: "Hotel Stepper",
                link: "/hotel",
              },
            ],

            children: [
              // ==========================
              // BASIC
              // ==========================

              {
                id: 101,
                title: "Hotel Type",
                icon: "building_2",

                categories: [
                  {
                    id: 1,
                    name: "Hotel Type",
                    link: "/hotel/type",
                  },
                ],
              },

              {
                id: 102,
                title: "Hotel Brand",
                icon: "badge_check",

                categories: [
                  {
                    id: 2,
                    name: "Brand",
                    link: "/hotel/brand",
                  },
                ],
              },

              {
                id: 103,
                title: "Star Rating",
                icon: "star",

                categories: [
                  {
                    id: 3,
                    name: "Star Rating",
                    link: "/hotel/star-rating",
                  },
                ],
              },

              {
                id: 104,
                title: "Sustainability",
                icon: "leaf",

                categories: [
                  {
                    id: 4,
                    name: "Sustainability",
                    link: "/hotel/sustainability",
                  },
                ],
              },

              // ==========================
              // ROOM
              // ==========================

              {
                id: 105,
                title: "Room Category",
                icon: "door_open",

                categories: [
                  {
                    id: 5,
                    name: "Room Category",
                    link: "/hotel/room-category",
                  },
                ],
              },

              {
                id: 106,
                title: "Bed Type",
                icon: "bed_double",

                categories: [
                  {
                    id: 6,
                    name: "Bed Type",
                    link: "/hotel/bed-type",
                  },
                ],
              },

              {
                id: 107,
                title: "Bathroom Type",
                icon: "bath",

                categories: [
                  {
                    id: 7,
                    name: "Bathroom Type",
                    link: "/hotel/bathroom-type",
                  },
                ],
              },

              {
                id: 108,
                title: "Room View",
                icon: "mountain",

                categories: [
                  {
                    id: 8,
                    name: "Room View",
                    link: "/hotel/room-view",
                  },
                ],
              },

              {
                id: 109,
                title: "Room Media Category",
                icon: "image",

                categories: [
                  {
                    id: 9,
                    name: "Room Media Category",
                    link: "/hotel/room-media-category",
                  },
                ],
              },

              // ==========================
              // FACILITY
              // ==========================

              {
                id: 110,
                title: "Facility Category",
                icon: "layout_grid",

                categories: [
                  {
                    id: 10,
                    name: "Facility Category",
                    link: "/hotel/facility-category",
                  },
                ],
              },

              {
                id: 111,
                title: "Facility",
                icon: "building",

                categories: [
                  {
                    id: 11,
                    name: "Facility",
                    link: "/hotel/facility",
                  },
                ],
              },

              {
                id: 112,
                title: "Accessibility",
                icon: "accessibility",

                categories: [
                  {
                    id: 12,
                    name: "Accessibility",
                    link: "/hotel/accessibility",
                  },
                ],
              },

              // ==========================
              // FOOD & EXTRA
              // ==========================

              {
                id: 113,
                title: "Meal Plan",
                icon: "utensils",

                categories: [
                  {
                    id: 13,
                    name: "Meal Plan",
                    link: "/hotel/meal-plan",
                  },
                ],
              },

              {
                id: 114,
                title: "Dining Meal Type",
                icon: "soup",

                categories: [
                  {
                    id: 14,
                    name: "Dining Meal Type",
                    link: "/hotel/dining-meal-type",
                  },
                ],
              },

              {
                id: 115,
                title: "Dining Service Type",
                icon: "bell",

                categories: [
                  {
                    id: 15,
                    name: "Dining Service Type",
                    link: "/hotel/dining-service-type",
                  },
                ],
              },

              {
                id: 116,
                title: "Extra Type",
                icon: "gift",

                categories: [
                  {
                    id: 16,
                    name: "Extra Type",
                    link: "/hotel/extra-type",
                  },
                ],
              },

              // ==========================
              // POLICY & PRICING
              // ==========================

              {
                id: 117,
                title: "Rate Plan Type",
                icon: "receipt",

                categories: [
                  {
                    id: 17,
                    name: "Rate Plan Type",
                    link: "/hotel/rate-plan-type",
                  },
                ],
              },

              {
                id: 118,
                title: "Policy Type",
                icon: "shield_check",

                categories: [
                  {
                    id: 18,
                    name: "Policy Type",
                    link: "/hotel/policy-type",
                  },
                ],
              },

              {
                id: 119,
                title: "Policy",
                icon: "file_text",

                categories: [
                  {
                    id: 19,
                    name: "Policy",
                    link: "/hotel/policy",
                  },
                ],
              },

              {
                id: 120,
                title: "Media Category",
                icon: "image",

                categories: [
                  {
                    id: 20,
                    name: "Media Category",
                    link: "/hotel/media-category",
                  },
                ],
              },
              {
                id: 121,
                title: "Room Type",
                icon: "bed",

                categories: [
                  {
                    id: 21,
                    name: "Room Type",
                    link: "/hotel/room-type",
                  },
                ],
              },

              {
                id: 122,
                title: "Media Asset",
                icon: "image",

                categories: [
                  {
                    id: 22,
                    name: "Media Asset",
                    link: "/hotel/media-asset",
                  },
                ],
              },
            ],
          },

          {
            id: 55,
            title: "Airport Transfer Management",
            icon: "plane_landing",

            categories: [
              {
                id: 36,
                name: "Airport Transfer",
                link: "/airport_transfer",
              },
            ],
          },
        ],
      },
    ],
  },
];
const findOpenParent = (items: any[], pathname: string): string | undefined => {
  for (const item of items) {
    if (item.categories?.some((category: any) => category.link === pathname)) {
      return String(item.id);
    }

    if (item.children) {
      const child = findOpenParent(item.children, pathname);

      if (child) {
        return String(item.id);
      }
    }
  }

  return undefined;
};

export const getDefaultOpenItem = (pathname: string) => {
  for (const group of SIDEBARCONTENTITEMS) {
    const result = findOpenParent(group.items, pathname);

    if (result) {
      return result;
    }
  }

  return undefined;
};
