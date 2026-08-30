import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCatalog({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
