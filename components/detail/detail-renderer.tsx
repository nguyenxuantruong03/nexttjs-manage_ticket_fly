import { detectField } from "./utils/detect-field";
import { ImageRenderer } from "./renderers/image-renderer";
import { LinkRenderer } from "./renderers/link-renderer";
import { ArrayRenderer } from "./renderers/array-renderer";
import { ObjectRenderer } from "./renderers/object-renderer";
import { BooleanRenderer } from "./renderers/boolean-renderer";
import { DateRenderer } from "./renderers/date-renderer";
import { TextRenderer } from "./renderers/text-renderer";
import { NumberRenderer } from "./renderers/number-renderer";
import { EntityRenderer } from "./renderers/entity-renderer";

type Props = { field: string; value: any };

export function DetailRenderer({ field, value }: Props) {
  const type = detectField(field, value);

  switch (type) {
    case "image": return <ImageRenderer value={value} />;
    case "link": return <LinkRenderer value={value} />;
    case "boolean": return <BooleanRenderer value={value} />;
    case "date": return <DateRenderer value={value} />;
    case "entity": return <EntityRenderer value={value} />;
    case "array": return <ArrayRenderer value={value} />;
    case "object": return <ObjectRenderer value={value} />;
    default:
      if (typeof value === "number") return <NumberRenderer value={value} />;
      return <TextRenderer value={value} />;
  }
}