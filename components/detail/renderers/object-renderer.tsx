import { Card } from "@/components/ui/card";

export function ObjectRenderer({ value }: { value: any }) {
  return (
    <Card
      className="
bg-muted
p-4
"
    >
      <pre
        className="
text-xs
overflow-auto
"
      >
        {JSON.stringify(value, null, 2)}
      </pre>
    </Card>
  );
}
