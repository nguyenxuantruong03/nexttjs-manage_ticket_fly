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
import UploadImage from "./upload-image";
import { useUpdateUserMe } from "@/hooks/user";
import { useSubmit } from "@/hooks/useSubmit";

export const UpdateImageSchema = z.object({
  image: z.optional(z.string()),
});

interface FormUploadImageProps {
  image?: string | null | undefined;
  name?: string | null | undefined;
}

export const FormUploadImage = ({ image, name }: FormUploadImageProps) => {
  const submit = useSubmit();
  const updateUserMe = useUpdateUserMe();

  const form = useForm<z.infer<typeof UpdateImageSchema>>({
    resolver: zodResolver(UpdateImageSchema),
    defaultValues: {
      image: image || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UpdateImageSchema>) => {
    try {
      await submit({
        form,
        mutation: updateUserMe.mutateAsync({
          image: values.image,
        }),
        success: "Cập nhật ảnh thành công",
      });
    } catch {
      // lỗi đã được useSubmit xử lý (toast + setError nếu có field lỗi)
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <UploadImage
                  name={name}
                  image={image}
                  onChange={(url) => {
                    field.onChange(url);
                    form.handleSubmit(onSubmit)();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
