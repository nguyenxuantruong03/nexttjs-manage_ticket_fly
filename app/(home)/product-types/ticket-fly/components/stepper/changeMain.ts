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
      setSubStep("airport");
      break;

    case "flight":
      setSubStep("crew-duty");
      break;

    case "seat-meal":
      setSubStep("seat-type");
      break;

    case "pricing":
      setSubStep("fare-rule-type");
      break;

    case "addon":
      setSubStep("addon-type");
      break;
  }
}