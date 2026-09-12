import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DetailField } from "./detail-field";

type Props = {
  fields: [string, unknown][];
};

export function DetailSection({
  fields,
}: Props) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fields.map(([key, value]) => (
            <DetailField
              key={key}
              field={key}
              value={value}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}