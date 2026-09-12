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
    case "booking-item-type":
      setSubStep("booking-item-type");
      break;
    case "booking-type":
      setSubStep("booking-type");
      break;
    case "coupon":
      setSubStep("coupon");
      break;
    case "extra":
      setSubStep("extra-fee-type");
      break;
    case "package":
      setSubStep("package");
      break;
    case "price-rule-type":
      setSubStep("price-rule-type");
      break;
    case "promotion":
      setSubStep("promotion-main");
      break;
    case "compliance-legal":
      setSubStep("tax-rule"); // NOTE: was "tax-rule" in original; consider "legal-document"
      break;
    case "feature-flag":
      setSubStep("feature-flag");
      break;
    case "risk-fraud":
      setSubStep("blacklist-entry");
      break;
  }
}
