import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutReferences({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
