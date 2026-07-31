import { Loader2 } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center">
      <div className="w-full max-w-4xl space-y-10">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-background shadow-sm">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>

          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Loading your workspace
            </h2>

            <p className="text-muted-foreground">
              Please wait while we prepare everything for you.
            </p>
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border bg-background p-8 shadow-sm">
          <Skeleton className="h-8 w-48" />

          <div className="grid gap-5 md:grid-cols-2">
            <Skeleton className="h-14 rounded-xl" />
            <Skeleton className="h-14 rounded-xl" />
            <Skeleton className="h-14 rounded-xl" />
            <Skeleton className="h-14 rounded-xl" />
          </div>

          <Skeleton className="h-56 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
