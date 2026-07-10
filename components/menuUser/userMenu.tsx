"use client";

import { User } from "@/type";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

import {
  CheckCircle2,
  LogOut,
  Settings,
  Shield,
  UserCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

interface UserMenuProps {
  user: User;
  children: React.ReactNode;
  onLogout?: () => void;
}

const PROVIDER_NAME: Record<string, string> = {
  google: "Google",
  github: "GitHub",
  facebook: "Facebook",
  discord: "Discord",
};

const ROLE_VARIANT = {
  ADMIN: "destructive",
  EDITOR: "secondary",
  USER: "outline",
} as const;

export function UserMenu({ user, children, onLogout }: UserMenuProps) {
  const provider = user.account
    ? (PROVIDER_NAME[user.account.provider] ?? user.account.provider)
    : "Password";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-80 z-[9999]">
        <DropdownMenuLabel>
          <div className="space-y-1">
            <p className="truncate font-semibold">{user.name}</p>

            <p className="truncate text-xs font-normal text-muted-foreground">
              {user.email}
            </p>

            <Badge variant={ROLE_VARIANT[user.role]} className="mt-2">
              {user.role}
            </Badge>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="justify-between">
            <div className="flex items-center gap-2">
              <UserCircle className="size-4" />
              Đăng nhập
            </div>

            <Badge variant="secondary">{provider}</Badge>
          </DropdownMenuItem>

          <DropdownMenuItem className="justify-between">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              Xác thực 2 bước
            </div>

            <Badge variant={user.isTwoFactorEnabled ? "default" : "outline"}>
              {user.isTwoFactorEnabled ? "Bật" : "Tắt"}
            </Badge>
          </DropdownMenuItem>

          <DropdownMenuItem className="justify-between">
            <div className="flex items-center gap-2">
              {user.emailVerified ? (
                <CheckCircle2 className="size-4 text-green-600" />
              ) : (
                <XCircle className="size-4 text-red-500" />
              )}
              Email
            </div>

            <Badge variant={user.emailVerified ? "default" : "destructive"}>
              {user.emailVerified ? "Verified" : "Unverified"}
            </Badge>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/profile" className="flex items-center">
            <Settings className="mr-2 size-4" />
            <span>Cài đặt tài khoản</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-red-600 focus:text-red-600"
          onClick={onLogout}
        >
          <LogOut className="mr-2 size-4" />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
