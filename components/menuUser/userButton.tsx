"use client";

import * as React from "react";
import { User } from "@/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UserButtonProps extends React.ComponentPropsWithoutRef<
  typeof Button
> {
  user: User;
  open?: boolean;
  avatarOnly?: boolean;
}

const ROLE_VARIANT = {
  ADMIN: "destructive",
  EDITOR: "secondary",
  USER: "outline",
} as const;

export const UserButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  UserButtonProps
>(({ user, open = true, avatarOnly = false, className, ...props }, ref) => {
  if (avatarOnly) {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className="rounded-full p-0"
        {...props}
      >
        <Avatar className="size-9">
          <AvatarImage src={user.image ?? ""} />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </Button>
    );
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      className={`h-14 w-full
    ${open ? "justify-start gap-3 px-2" : "justify-center px-0"}
    focus-visible:ring-0
    focus-visible:ring-offset-0
    focus:outline-none
    outline-none
    shadow-none
    ${className ?? ""}`}
      {...props}
    >
      <Avatar className="size-9 shrink-0">
        <AvatarImage src={user.image ?? ""} />
        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>

      {open && (
        <div className="flex flex-1 flex-col items-start overflow-hidden">
          <span className="w-full truncate text-sm font-medium">
            {user.name}
          </span>

          <span className="w-full truncate text-xs text-muted-foreground">
            {user.email}
          </span>

          <Badge variant={ROLE_VARIANT[user.role]} className="mt-1 text-[10px]">
            {user.role}
          </Badge>
        </div>
      )}
    </Button>
  );
});

UserButton.displayName = "UserButton";
