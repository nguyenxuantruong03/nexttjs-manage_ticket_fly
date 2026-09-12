"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import GoogleSVG from "@/public/google";
import { useSearchParams } from "next/navigation";
import GoogleDestinationDialog from "@/components/common/confirm/google-destination-dialog";

interface SocialProps {
  loading?: boolean;
}

const Social = ({ loading }: SocialProps) => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const handleSelect = (type: "manage" | "product") => {
    setOpen(false);

    const googleLoginUrl =
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/login` +
      `?redirect=${encodeURIComponent(redirect)}` +
      `&type=${type}`;

    window.location.href = googleLoginUrl;
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="bg-white border w-full mt-5 text-sm hover:scale-105 duration-300 text-[#002D74] flex justify-center items-center gap-x-3"
        disabled={loading}
        onClick={() => setOpen(true)}
      >
        <GoogleSVG /> Login with Google
      </Button>

      <GoogleDestinationDialog
        open={open}
        onOpenChange={setOpen}
        onSelect={handleSelect}
      />
    </>
  );
};

export default Social;
