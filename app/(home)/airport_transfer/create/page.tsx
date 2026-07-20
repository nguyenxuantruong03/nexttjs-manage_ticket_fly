import FormPage from "@/components/form/form";
import AirportTransferForm from "./components/form";

export default function Page() {
  return (
    <FormPage
      label="Airport Transfer"
      title="Create Airport Transfer"
      description="Create airport transfer"
      action="Back"
      link="/airport_transfer"
      apiPath="airport-transfer"
    >
      <AirportTransferForm />
    </FormPage>
  );
}
