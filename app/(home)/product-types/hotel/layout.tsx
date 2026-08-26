import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutTicketFly({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
