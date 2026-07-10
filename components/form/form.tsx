"use client";

import Link from "next/link";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { toast } from "react-hot-toast";

interface FormProps {
  children: React.ReactNode;
  label: string;
  title: string;
  link: string;
  action: string;
  apiPath?: string;
  updateapiIdPath?: string;
}

const FormPage = ({
  children,
  title,
  label,
  action,
  link,
  apiPath,
  updateapiIdPath,
}: FormProps) => {
  const backend = "http://backend:3000";

  const apiUrl = apiPath ? `${backend}/${apiPath}` : null;

  const apiUrlID =
    apiPath && updateapiIdPath
      ? `${backend}/${apiPath}/${updateapiIdPath}`
      : null;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Đã copy URL");
    } catch {
      toast.error("Không thể copy URL");
    }
  };

  return (
    <div className="flex min-h-full w-full flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b pb-4">
        <div>
          <Label className="text-2xl font-bold">{label}</Label>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>

        <Link href={link}>
          <Button>{action}</Button>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 min-w-0 py-6">{children}</main>

      {/* Footer */}
      {(apiUrl || apiUrlID) && (
        <div className="mt-auto space-y-4 border-t pt-4">
          {apiUrl && (
            <div className="grid gap-2">
              <Link
                href={apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Badge
                  variant="destructive"
                  className="cursor-pointer font-mono"
                >
                  API: {apiPath}
                </Badge>
              </Link>

              <Badge
                variant="secondary"
                className="cursor-pointer justify-self-start font-mono"
                onClick={() => copyToClipboard(apiUrl)}
              >
                URL: {apiUrl}
              </Badge>
            </div>
          )}

          {apiUrlID && (
            <div className="grid gap-2">
              <Link
                href={apiUrlID}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Badge
                  variant="destructive"
                  className="cursor-pointer font-mono"
                >
                  API: {apiPath}/{updateapiIdPath}
                </Badge>
              </Link>

              <Badge
                variant="secondary"
                className="cursor-pointer justify-self-start font-mono"
                onClick={() => copyToClipboard(apiUrlID)}
              >
                URL: {apiUrlID}
              </Badge>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormPage;
