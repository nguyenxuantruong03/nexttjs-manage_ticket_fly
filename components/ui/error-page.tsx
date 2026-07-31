"use client";

import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

const ErrorPage = ({
  title = "Unable to load this page",
  description = "Something unexpected happened while loading your data.",
  onRetry,
}: ErrorPageProps) => {
  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-destructive/10 blur-3xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border bg-background shadow-xl">
            <AlertTriangle className="h-14 w-14 text-destructive" />
          </div>
        </div>

        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>

          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="mt-10 flex gap-3">
          {onRetry && (
            <Button size="lg" onClick={onRetry}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          )}

          <Button size="lg" variant="outline" onClick={() => router.back()}>
            <Home className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
