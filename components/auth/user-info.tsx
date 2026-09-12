"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { UserAvatarUpload } from "./UserAvatarUpload";
import { User } from "@/types/users/auth/users";

interface UserInfoProps {
  user?: User;

  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  const INFOCARDS = [
    {
      label: "Id",
      data: user?.id,
    },
    {
      label: "Name",
      data: user?.name,
    },
    {
      label: "Email",
      data: user?.email,
    },
    {
      label: "Role",
      data: user?.role,
    },
  ];

  return (
    <Card className="w-full max-w-3xl md:max-w-2xl">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">{label}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Image */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Image</p>

          <div className="max-w-full">
            <UserAvatarUpload image={user?.image} name={user?.name} />
          </div>
        </div>

        {/* User information */}
        {INFOCARDS.map((item) => (
          <div
            key={item.label}
            className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm"
          >
            <p className="text-sm font-medium">{item.label}</p>

            <p className="truncate rounded-md bg-slate-100 p-1 font-mono text-xs md:max-w-xs">
              {item.data || "-"}
            </p>
          </div>
        ))}

        {/* Two Factor Authentication */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>

          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
