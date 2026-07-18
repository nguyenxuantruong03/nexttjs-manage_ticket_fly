"use client";

import { Row } from "@tanstack/react-table";

import { ProviderBooking } from "@/types/bookings/provider-bookings";
import { ActionMenu } from "@/components/form/action-menu";

interface ProviderBookingCellActionProps {
  row: Row<ProviderBooking>;
}

const ProviderBookingCellAction = ({ row }: ProviderBookingCellActionProps) => {
  return (
    <ActionMenu
      row={row.original}
      actions={[
        {
          label: "Copy ID",
          onClick: (provider) => navigator.clipboard.writeText(provider.id),
        },
        {
          separator: true,
          label: "Update",
          href: `/provider-booking/${row.original.id}`,
        },
        {
          label: "Delete",
          danger: true,
          onClick: (provider) => {
            console.log(provider.id);
          },
        },
      ]}
    />
  );
};

export default ProviderBookingCellAction;
