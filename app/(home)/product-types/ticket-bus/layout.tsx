import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutTicketBus({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
