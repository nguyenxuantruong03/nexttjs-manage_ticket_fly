import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useSubmit() {
  const router = useRouter();

  const submit = async <T>({
    mutation,

    success,

    redirect,

    onSuccess,
  }: {
    mutation: Promise<T>;

    success: string;

    redirect?: string;

    onSuccess?: (data: T) => void;
  }) => {
    const response = await toast.promise(mutation, {
      loading: "Saving...",

      success,

      error: "Something went wrong",
    });

    if (onSuccess) {
      onSuccess(response);
    }

    if (redirect) {
      router.push(redirect);
    }

    return response;
  };

  return submit;
}
