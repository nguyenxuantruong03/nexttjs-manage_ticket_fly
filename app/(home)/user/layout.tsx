import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutUser({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="userPage"
        title="Manage User"
        link="/users/main"
        apiPath="user"
        description="userPage"
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </FormPage>
    </FormPageProvider>
  );
}