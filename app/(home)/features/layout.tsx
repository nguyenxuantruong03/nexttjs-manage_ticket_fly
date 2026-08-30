import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutFeatures({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
