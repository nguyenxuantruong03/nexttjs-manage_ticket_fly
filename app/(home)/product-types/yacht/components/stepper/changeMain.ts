interface ChangeMainProps {
  setMainStep: (value: string) => void;
  setSubStep: (value: string) => void;
}

export function changeMainStep(
  id: string,
  { setMainStep, setSubStep }: ChangeMainProps,
) {
  setMainStep(id);

  switch (id) {
    case "basic":
      setSubStep("type");
      break;

    case "service":
      setSubStep("service-type");
      break;

    case "crew":
      setSubStep("crew-role");
      break;

    case "pricing":
      setSubStep("fee-type");
      break;
  }
}