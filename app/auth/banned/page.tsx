import Link from "next/link";

import {
AlertTriangle,
ArrowLeft,
CalendarClock,
ShieldAlert,
} from "lucide-react";

import {
Alert,
AlertDescription,
AlertTitle,
} from "@/components/ui/alert";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card";

interface BannedPageProps {
searchParams: Promise<{
reason?: string;
banUntil?: string;
}>;
}

export default async function BannedPage({
searchParams,
}: BannedPageProps) {
const params = await searchParams;

const reason =
params.reason ??
"Your account has been suspended due to a violation of our terms and policies.";

const banUntil = params.banUntil
? new Date(params.banUntil)
: null;

const isValidBanUntil =
banUntil !== null &&
!Number.isNaN(banUntil.getTime());

const isPermanent = !isValidBanUntil;

const formattedBanUntil = isValidBanUntil
? new Intl.DateTimeFormat("en-US", {
dateStyle: "long",
timeStyle: "short",
}).format(banUntil)
: null;

return ( <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-muted/30 px-4 py-10">
{/* Background decoration */} <div className="pointer-events-none absolute inset-0 overflow-hidden"> <div className="absolute left-1/2 top-[-180px] size-[420px] -translate-x-1/2 rounded-full bg-destructive/10 blur-3xl" />


    <div className="absolute bottom-[-180px] left-[-120px] size-[360px] rounded-full bg-orange-500/10 blur-3xl" />

    <div className="absolute right-[-120px] top-1/3 size-[320px] rounded-full bg-destructive/5 blur-3xl" />
  </div>

  <div className="relative z-10 w-full max-w-lg">
    <Card className="overflow-hidden rounded-3xl shadow-xl">
      {/* Header */}
      <CardHeader className="relative border-b bg-gradient-to-b from-destructive/[0.08] to-transparent px-6 pb-8 pt-10 text-center sm:px-10">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute left-1/2 top-[-70px] size-48 -translate-x-1/2 rounded-full border border-destructive/10" />

        <div className="pointer-events-none absolute left-1/2 top-[-45px] size-36 -translate-x-1/2 rounded-full border border-destructive/10" />

        {/* Icon */}
        <div className="relative mx-auto mb-5 flex size-20 items-center justify-center rounded-full border border-destructive/20 bg-destructive/10">
          <div className="flex size-14 items-center justify-center rounded-full bg-destructive/15 text-destructive">
            <ShieldAlert
              className="size-7"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <Badge
          variant="destructive"
          className="mb-4 rounded-full px-3 py-1"
        >
          <span className="mr-2 size-1.5 rounded-full bg-current" />
          Account restricted
        </Badge>

        <CardTitle className="text-2xl tracking-tight sm:text-3xl">
          Your account is banned
        </CardTitle>

        <CardDescription className="mx-auto mt-2 max-w-sm text-sm leading-6">
          Your account is currently restricted and you
          cannot access the platform at this time.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 p-6 sm:p-8">
        {/* Reason */}
        <div className="rounded-2xl border bg-muted/40 p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <AlertTriangle
                className="size-4"
                strokeWidth={2}
              />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Reason for restriction
              </p>

              <p className="text-xs text-muted-foreground">
                Why your account has been restricted
              </p>
            </div>
          </div>

          <div className="rounded-xl border bg-background/70 px-4 py-3">
            <p className="text-sm leading-6 text-foreground/80">
              {reason}
            </p>
          </div>
        </div>

        {/* Ban duration */}
        <div className="rounded-2xl border bg-muted/40 p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <CalendarClock
                className="size-4"
                strokeWidth={2}
              />
            </div>

            <div>
              <p className="text-sm font-semibold">
                Restriction period
              </p>

              <p className="text-xs text-muted-foreground">
                Current account restriction
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border bg-background/70 px-4 py-3">
            <span className="text-sm text-muted-foreground">
              Status
            </span>

            <Badge
              variant={
                isPermanent
                  ? "destructive"
                  : "secondary"
              }
              className="rounded-full"
            >
              {isPermanent
                ? "Permanent"
                : "Temporary"}
            </Badge>
          </div>

          {formattedBanUntil && (
            <div className="mt-2 flex items-center justify-between rounded-xl border bg-background/70 px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Banned until
              </span>

              <span className="text-right text-sm font-medium">
                {formattedBanUntil}
              </span>
            </div>
          )}
        </div>

        {/* Support alert */}
        <Alert>
          <AlertTriangle className="size-4" />

          <AlertTitle>
            Need help?
          </AlertTitle>

          <AlertDescription>
            If you believe this restriction was made in
            error, please contact our support team for
            assistance.
          </AlertDescription>
        </Alert>

        {/* Back to login */}
        <Button
          asChild
          size="lg"
          className="group mt-2 h-12 w-full rounded-xl"
        >
          <Link href="/auth/login">
            <ArrowLeft
              className="mr-2 size-4 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
            />

            Back to login
          </Link>
        </Button>
      </CardContent>
    </Card>

    <p className="mt-6 text-center text-xs text-muted-foreground">
      If you need further assistance, please contact
      support.
    </p>
  </div>
</main>


);
}
