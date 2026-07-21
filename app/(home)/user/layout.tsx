import FormPage from "@/components/form/form";

export default function LayoutUser({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="User"
      title="Manage User"
      apiPath="users"
      description="Manage User"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
