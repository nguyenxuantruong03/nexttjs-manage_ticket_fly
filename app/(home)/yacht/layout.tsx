import FormPage from "@/components/form/form";

export default function LayoutYacht({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="YatchPage"
      title="Manage Yacht"
      link="/yacht/create"
      action="Create"
      apiPath="yacht"
      description="YatchPage"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
