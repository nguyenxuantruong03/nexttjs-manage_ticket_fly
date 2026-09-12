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
    case "service":
      setSubStep("route-type");
      break;

    case "vehicle":
      setSubStep("vehicle-type");
      break;

    case "media":
      setSubStep("media-asset");
      break;

    case "reason":
      setSubStep("reason-code");
      break;
  }
}
