import FormPage from "@/components/form/form";

export default function LayoutCountry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="Country"
      title="Manage country"
      link="/country/create"
      action="Create"
      apiPath="country"
      description="country"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
