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
    case "airline":
      setSubStep("airline-main");
      break;

    case "airport":
      setSubStep("airport");
      break;

    case "alliance":
      setSubStep("alliance");
      break;
  }
}