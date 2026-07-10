"use client";

import React from "react";
import { Button } from "../ui/button";
import { handleLogout } from "@/lib/logout";

interface SignOutButtonProps {
  children: React.ReactNode;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ children }) => {
  return (
    <Button
      className="dark:text-slate-200 text-slate-900"
      variant="outline"
      onClick={handleLogout}
    >
      {children}
    </Button>
  );
};

export default SignOutButton;
