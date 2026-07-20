"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
import FormError from "@/components/form-notification/form-error";
import FormSuccess from "@/components/form-notification/form-success";
import { User } from "@/types/bookings/auth/users";
import { SettingSchema } from "@/schemas/user";
import { useUpdateUser } from "@/hooks/user";

interface SettingFormProps {
  user: User;
}

const SettingForm: React.FC<SettingFormProps> = ({ user }) => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

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

  const { mutateAsync: updateMe } = useUpdateUser();

  const onSubmit = async (values: z.infer<typeof SettingSchema>) => {
    setSuccess("");
    setError("");
    try {
      await updateMe({
        password: values.password,
        name: values.name,
        isTwoFactorEnabled: values.isTwoFactorEnabled,
      });
      setSuccess("Thay đổi thành công!");
    } catch {
      setError("Cập nhật thất bại");
    } finally {
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
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadpw-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Two Factor Authentication</FormLabel>
                          <FormDescription>
                            Enable two factor authentication for your
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
                chọn để chỉnh sửa tài khoản!{" "}
              </p>
            )}
            {error && <FormError content={error || ""} />}
            {success && <FormSuccess content={success || ""} />}
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingForm;
