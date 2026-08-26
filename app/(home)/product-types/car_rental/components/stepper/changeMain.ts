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
    case "insurance":
      setSubStep("insurance-type");
      break;

    case "document":
      setSubStep("document-type");
      break;
  }
}