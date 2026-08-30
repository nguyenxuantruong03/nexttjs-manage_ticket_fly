"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUpdateUserMe } from "@/hooks/user";
import { useSubmit } from "@/hooks/useSubmit";

export const UpdateImageSchema = z.object({
  image: z.optional(z.string()),
});

export const ForDeleteImage = () => {
  const submit = useSubmit();
  const updateUserMe = useUpdateUserMe();

  const form = useForm<z.infer<typeof UpdateImageSchema>>({
    resolver: zodResolver(UpdateImageSchema),
    defaultValues: {
      image: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async () => {
    try {
      await submit({
        form,
        mutation: updateUserMe.mutateAsync({
          image: "", // hoặc null tuỳ BE quy ước "không có ảnh"
        }),
        success: "Xóa thành công!",
      });
      form.reset();
    } catch {
      // lỗi đã được useSubmit xử lý
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormControl>
                <></>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="outline"
          className="w-full cursor-pointer flex"
          disabled={isSubmitting}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Xóa ảnh
        </Button>
      </form>
    </Form>
  );
};
