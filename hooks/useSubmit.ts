import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useSubmit() {
  const router = useRouter();

  const submit = async ({
    mutation,
    success,
    redirect,
  }: {
    mutation: Promise<any>;
    success: string;
    redirect: string;
  }) => {
    await toast.promise(mutation, {
      loading: "Saving...",
      success,
      error: "Something went wrong",
    });

    router.push(redirect);
  };

  return submit;
}
