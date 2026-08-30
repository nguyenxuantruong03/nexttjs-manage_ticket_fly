"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdateUserMe } from "@/hooks/user";
import { useSubmit } from "@/hooks/useSubmit";
import { User } from "@/types/users/auth/users";
import { SettingSchema } from "./schema";

interface SettingFormProps {
  user: User;
}

const SettingForm: React.FC<SettingFormProps> = ({ user }) => {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof SettingSchema>>({
    resolver: zodResolver(SettingSchema),
    defaultValues: {
      newPassword: undefined,
      password: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const updateUserMe = useUpdateUserMe();
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof SettingSchema>) => {
    try {
      await submit({
        form, // để useSubmit tự setError field-level nếu BE trả lỗi validation
        mutation: updateUserMe.mutateAsync({
          password: values.password,
          name: values.name,
          isTwoFactorEnabled: values.isTwoFactorEnabled,
        }),
        success: "Thay đổi thành công!",
      });
    } catch {
      // lỗi field đã được setError bên trong useSubmit,
      // lỗi chung đã hiện qua toast, không cần xử lý gì thêm ở đây
    }
  };

  return (
    <Card className="max-w-3xl w-full md:max-w-2xl">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Setting</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Xuan Truong" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!user?.account?.id && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="vlxdxuantruong@gmail.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isTwoFactorEnabled"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Two Factor Authentication</FormLabel>
                          <FormDescription>
                            Enable two factor authentication for your account
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>

            {user?.account?.id && (
              <p className="bg-blue-600/20 text-blue-600 font-semibold p-2 text-sm border-l-4 border-blue-600 rounded-md">
                Bạn đang đăng nhập bằng OAuth chúng tôi sẽ không có nhiều lựa
                chọn để chỉnh sửa tài khoản!
              </p>
            )}

            <Button type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingForm;
