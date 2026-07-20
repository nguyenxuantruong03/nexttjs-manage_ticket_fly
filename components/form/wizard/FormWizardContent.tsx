"use client";

interface Props {
  children: React.ReactNode;
}

export default function FormWizardContent({ children }: Props) {
  return <div className="mt-8">{children}</div>;
}
