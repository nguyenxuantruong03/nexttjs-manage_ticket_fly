"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface EntityCreateDialogProps {
  open: boolean;

  onOpenChange(open: boolean): void;

  title?: string;

  description?: string;

  children: React.ReactNode;
  dialogRef?: React.Ref<HTMLDivElement> | undefined;
}

export default function EntityCreateDialog({
  open,
  onOpenChange,
  title = "Create new",
  description = "Create a new item",
  dialogRef,
  children,
}: EntityCreateDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent ref={dialogRef}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>

          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
}
