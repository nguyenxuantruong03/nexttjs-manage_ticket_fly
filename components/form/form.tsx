"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { toast } from "react-hot-toast";
import { useFormPage } from "./form-context";
import { useLeaveConfirm } from "@/hooks/useLeaveConfirm";
import ConfirmDialog from "@/components/common/confirm-dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DraftPopover from "../daft/DraftPopover";
import { DraftEntity } from "../daft/draft-config";

interface DraftConfig {
  entity: DraftEntity;
}

interface FormProps {
  children: React.ReactNode;
  label: string;
  title: string;
  description: string;
  link?: string;

  action?: string;
  apiPath?: string;

  draft?: DraftConfig;
}

export default function FormPage({
  children,
  label,
  title,
  description,
  link,
  action,
  apiPath,
  draft,
}: FormProps) {
  const pathname = usePathname();
  const router = useRouter();

  const { dirty } = useFormPage();
  const { open, requestLeave, confirm, cancel } = useLeaveConfirm(dirty);

  const backend = "http://backend:3000";

  const apiUrl = apiPath ? `${backend}/api/${apiPath}` : null;
  const apiUrlID = apiPath ? `${backend}/api/${apiPath}/{id}` : null;

  const rootPath = link;

  const createPath = rootPath ? `${rootPath}/create` : "";

  const isChildPage =
    !!rootPath && pathname !== rootPath && pathname.startsWith(`${rootPath}/`);

  const handleBack = () => {
    requestLeave(() => {
      router.push(rootPath ?? "/");
    });
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Đã copy URL");
    } catch {
      toast.error("Không thể copy URL");
    }
  };

  return (
    <div
      className="
        flex
        min-h-full
        w-full
        flex-col
      "
    >
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          pb-4
        "
      >
        <div>
          <Label
            className="
              text-2xl
              font-bold
            "
          >
            {label}
          </Label>

          <div
            className="
              mt-1
              flex
              items-center
              gap-2
            "
          >
            <p
              className="
                text-sm
                text-muted-foreground
              "
            >
              {title}
            </p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircleHelp
                    className="
                      h-4
                      w-4
                      text-muted-foreground
                    "
                  />
                </TooltipTrigger>

                <TooltipContent>
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isChildPage && draft && (
            <DraftPopover entity={draft.entity} createPath={createPath} />
          )}

          {isChildPage ? (
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            link &&
            action && (
              <Link href={createPath}>
                <Button>{action}</Button>
              </Link>
            )
          )}
        </div>
      </header>

      <main
        className="
          flex-1
          min-w-0
          py-6
        "
      >
        {children}
      </main>

      {(apiUrl || apiUrlID) && (
        <div
          className="
            mt-auto
            space-y-4
            border-t
            pt-4
          "
        >
          {apiUrl && (
            <div
              className="
                grid
                gap-2
              "
            >
              <Link href={apiUrl}>
                <Badge variant="destructive">API: {apiPath}</Badge>
              </Link>

              <Badge
                variant="secondary"
                onClick={() => copyToClipboard(apiUrl)}
              >
                URL: {apiUrl}
              </Badge>
            </div>
          )}

          {apiUrlID && (
            <div
              className="
                grid
                gap-2
              "
            >
              <Link href={apiUrlID}>
                <Badge variant="destructive">
                  API: {apiPath}/{"{id}"}
                </Badge>
              </Link>

              <Badge
                variant="secondary"
                onClick={() => copyToClipboard(apiUrlID)}
              >
                URL: {apiUrlID}
              </Badge>
            </div>
          )}
        </div>
      )}

      <ConfirmDialog
        open={open}
        title="Unsaved changes"
        description="You have unsaved changes. Are you sure you want to leave this page?"
        cancelText="Stay"
        confirmText="Leave"
        onCancel={cancel}
        onConfirm={confirm}
      />
    </div>
  );
}
