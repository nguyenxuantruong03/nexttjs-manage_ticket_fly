import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutAirportTransfer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
