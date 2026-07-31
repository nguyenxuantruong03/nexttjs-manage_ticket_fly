import { SidebarTopic } from "../types";

export const statisticSidebar: SidebarTopic = {
  id: 1,
  topic: "Thống kê",
  items: [
    {
      id: 48,
      title: "Thống kê",
      icon: "chart_pie",
      categories: [
        {
          id: 1,
          name: "Tổng hợp",
          link: "/",
        },
        {
          id: 2,
          name: "Người dùng",
          link: "/dashboard/user",
        },
      ],
    },
  ],
};
