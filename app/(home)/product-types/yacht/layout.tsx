import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutYacht({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormPageProvider>{children}</FormPageProvider>;
}
