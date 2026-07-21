import FormPage from "@/components/form/form";

export default function LayoutCarRental({ children }: { children: React.ReactNode }) {
  return (
    <FormPage
      label="CarrentalPage"
      title="Manage Car Rental"
      link="/car_rental/create"
      action="Create"
      apiPath="car_rental"
      description="CarrentalPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
