import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type UseAppFormOptions<T> = {
  schema: z.ZodTypeAny;
  defaultValues?: T;
  mode?: "create" | "update";
};

export function useAppForm<T>({
  schema,
  defaultValues,
  mode = "create",
}: UseAppFormOptions<T>) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as any,
    mode: "onChange",
  });

  return {
    form,
    mode,
    isUpdate: mode === "update",
  };
}
