import { Card } from "@/components/ui/card";

import { DetailRenderer } from "./detail-renderer";

function formatFieldLabel(field: string) {
  const labels: Record<string, string> = {
    numericCode: "Numeric Code",

    flagEmoji: "Flag",

    isDefault: "Default Currency",
  };

  return labels[field] ?? field.replace(/([A-Z])/g, " $1");
}

type Props = {
  field: string;

  value: any;
};

export function DetailField({ field, value }: Props) {
  return (
    <Card
      className="
group
p-5
transition
hover:-translate-y-1
hover:shadow-lg
"
    >
      <p
        className="
mb-3
text-xs
uppercase
tracking-widest
text-muted-foreground
"
      >
        {formatFieldLabel(field)}
      </p>

      <DetailRenderer field={field} value={value} />
    </Card>
  );
}
