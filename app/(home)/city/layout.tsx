import FormPage from "@/components/form/form";

export default function LayoutCity({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="City"
      title="Manage City"
      link="/city/create"
      action="Create"
      apiPath="city"
      description="city"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
