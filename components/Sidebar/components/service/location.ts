import { SidebarItem } from "../../types";

export const locationSidebar: SidebarItem = {
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
};
