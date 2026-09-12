import { useRouter } from "next/navigation";
import ConfirmDialog from "./confirm-dialog";

interface ConfirmRedirectDialogProps {
  redirectDefault: string;
  shouldShow: boolean;
  cancelDialog: () => void;
  confirmDialog: () => void;
  title?: string;
  description?: string;
}

const ConfirmRedirectDialog = ({
  redirectDefault,
  shouldShow,
  cancelDialog,
  confirmDialog,
  title = "Leave this page?",
  description = "Your changes have been saved. Do you want to go back to the management page?",
}: ConfirmRedirectDialogProps) => {
  const router = useRouter();
  return (
    <>
      {shouldShow && (
        <ConfirmDialog
          title={title}
          description={description}
          open={shouldShow}
          onCancel={cancelDialog}
          onConfirm={() => {
            confirmDialog();
            router.push(redirectDefault);
          }}
        />
      )}
    </>
  );
};

export default ConfirmRedirectDialog;
