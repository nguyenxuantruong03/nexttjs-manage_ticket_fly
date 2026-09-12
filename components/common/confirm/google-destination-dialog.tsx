// components/dialogs/GoogleDestinationDialog.tsx
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (type: "manage" | "product") => void;
}

export default function GoogleDestinationDialog({
  open,
  onOpenChange,
  onSelect,
}: Props) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Bạn muốn đăng nhập vào đâu?</AlertDialogTitle>
          <AlertDialogDescription>
            Chọn nơi bạn muốn chuyển đến sau khi đăng nhập bằng Google. (Trang
            Quản lý chỉ áp dụng cho tài khoản Admin.)
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onSelect("product")}>
            Trang Sản phẩm
          </AlertDialogCancel>

          <AlertDialogAction onClick={() => onSelect("manage")}>
            Trang Quản lý
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
