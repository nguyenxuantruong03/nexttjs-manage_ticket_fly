interface SocialLinkProps {
  label: string;
  value: string;
}

export function SocialLink({
  label,
  value,
}: SocialLinkProps) {
  return (
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md border px-2.5 py-1 text-xs font-medium transition-colors hover:bg-muted"
    >
      {label}
    </a>
  );
}