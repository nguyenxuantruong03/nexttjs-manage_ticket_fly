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
    case "facility":
      setSubStep("facility-category");
      break;

    case "policy":
      setSubStep("policy-main");
      break;
  }
}