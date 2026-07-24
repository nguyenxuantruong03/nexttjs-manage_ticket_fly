import { DetailTabs } from "./detail-tabs";
import { DetailHeader } from "./detail-header";

type Props = {
  title: string;

  data: any;

  groups: Record<string, readonly string[]>;
};

export function DetailPage({ title, data, groups }: Props) {
  return (
    <div
      className="
space-y-8
p-6
"
    >
      <DetailHeader title={title} data={data} />

      <DetailTabs groups={groups} data={data} />
    </div>
  );
}
