import FormPage from "@/components/form/form";

export default function LayoutHotel({ children }: { children: React.ReactNode }) {
  return (
    <FormPage
      label="hotelPage"
      title="Manage Provider Booking"
      link="/hotel/create"
      action="Create"
      apiPath="hotel-create"
      description="hotelPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
