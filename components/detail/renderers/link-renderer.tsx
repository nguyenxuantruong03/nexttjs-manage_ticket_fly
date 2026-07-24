import { ExternalLink } from "lucide-react";

export function LinkRenderer({ value }: { value: string }) {
  return (
    <a
      href={value}
      target="_blank"
      className="
flex
items-center
gap-2
text-primary
hover:underline
"
    >
      {value}

      <ExternalLink size={14} />
    </a>
  );
}
