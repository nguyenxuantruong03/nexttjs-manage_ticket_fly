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
      setSubStep("hotel-type");
      break;

    case "room":
      setSubStep("hotel-room-category");
      break;

    case "facility":
      setSubStep("hotel-facility-category");
      break;

    case "food":
      setSubStep("hotel-meal-plan");
      break;

    case "pricing":
      setSubStep("hotel-rate-plan-type");
      break;

    case "media":
      setSubStep("hotel-media-asset");
      break;
  }
}
