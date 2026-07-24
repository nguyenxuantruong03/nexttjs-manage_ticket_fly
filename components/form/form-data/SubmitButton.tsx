"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

export interface SubmitButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export function SubmitButton({
  children,
  loading,
  loadingText = "Đang xử lý...",
  disabled,
  className,
  ...props
}: SubmitButtonProps) {
  const methods = useFormContext();

  const isSubmitting = methods?.formState?.isSubmitting ?? false;
  const isLoading = loading ?? isSubmitting;
  const { loading: blocked } = useAppFormContext();

  return (
    <Button
      type="submit"
      disabled={blocked || disabled || isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

      {isLoading ? loadingText : children}
    </Button>
  );
}

export default SubmitButton;
