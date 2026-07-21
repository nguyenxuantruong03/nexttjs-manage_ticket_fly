import FormPage from "@/components/form/form";

export default function LayoutCurrency({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="Currency"
      title="Manage Currency"
      link="/currency/create"
      action="Create"
      apiPath="currency"
      description="Currency"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
