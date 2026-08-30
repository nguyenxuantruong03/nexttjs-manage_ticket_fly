import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCommerce({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
