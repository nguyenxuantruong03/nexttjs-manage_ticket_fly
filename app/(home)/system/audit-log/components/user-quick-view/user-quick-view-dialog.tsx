"use client";

import {
  BadgeCheck,
  CalendarDays,
  CircleUserRound,
  Mail,
  ShieldCheck,
  UserRound,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { MediaPreview } from "@/components/common/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useAuditLogByActor } from "@/hooks/system/audit-log";

import { ProviderCard } from "./provider-card";
import { RoleBadge } from "./role-badge";
import { SectionTitle } from "./section-title";
import { InfoItem } from "./info-item";
import { StatusCard } from "./status-card";
import { formatDate } from "./utils";
import { EmptyValue } from "./empty-value";

interface Props {
  actorId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserQuickViewDialog({
  actorId,
  open,
  onOpenChange,
}: Props) {
  const query = useAuditLogByActor(
    actorId ?? "",
    open && !!actorId,
  );

  const user = query.data;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-2xl">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="text-lg">
            User Details
          </DialogTitle>

          <DialogDescription>
            Actor information and account status
          </DialogDescription>
        </DialogHeader>

        {query.isPending && (
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-sm text-muted-foreground">
              Loading user...
            </div>
          </div>
        )}

        {query.isError && (
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-sm text-destructive">
              Failed to load user.
            </div>
          </div>
        )}

        {!query.isPending && !query.isError && !user && (
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-sm text-muted-foreground">
              User not found.
            </div>
          </div>
        )}

        {user && (
          <div className="space-y-6 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                {user.image ? (
                  <MediaPreview
                    path={user.image}
                    name={user.name || user.email}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-2xl font-semibold text-muted-foreground">
                    {user.name?.charAt(0)?.toUpperCase() ??
                      user.email?.charAt(0)?.toUpperCase() ??
                      "U"}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="truncate text-lg font-semibold">
                    {user.name || "Unnamed User"}
                  </h3>

                  <RoleBadge role={user.role} />
                </div>

                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{user.email}</span>
                </div>

                <div className="font-mono text-xs text-muted-foreground">
                  {user.id}
                </div>
              </div>
            </div>

            <Separator />

            <section className="space-y-3">
              <SectionTitle
                icon={<CircleUserRound className="h-4 w-4" />}
                title="Identity"
              />

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <InfoItem label="User ID" value={user.id} mono />
                <InfoItem label="Full Name" value={user.name} />
                <InfoItem label="Email" value={user.email} />
                <InfoItem label="Role" value={user.role} />

                <InfoItem
                  label="Email Verified"
                  value={
                    user.emailVerified
                      ? formatDate(user.emailVerified)
                      : "Not verified"
                  }
                />

                <InfoItem
                  label="Resend Email Count"
                  value={String(user.reSendemail)}
                />
              </div>
            </section>

            <Separator />

            <section className="space-y-3">
              <SectionTitle
                icon={<UserRound className="h-4 w-4" />}
                title="Account"
              />

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <InfoItem
                  label="Account ID"
                  value={user.account?.id}
                  mono
                />

                <InfoItem
                  label="Account Status"
                  value={
                    user.account ? "Connected" : "No account"
                  }
                />

                <InfoItem
                  label="Created At"
                  value={formatDate(user.createdAt)}
                />

                <InfoItem
                  label="Updated At"
                  value={formatDate(user.updatedAt)}
                />
              </div>
            </section>

            <Separator />

            <section className="space-y-3">
              <SectionTitle
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Security"
              />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <StatusCard
                  label="Two-Factor Authentication"
                  enabled={user.isTwoFactorEnabled}
                />

                <StatusCard
                  label="Email Verification"
                  enabled={!!user.emailVerified}
                />

                <StatusCard
                  label="Two-Factor Confirmation"
                  enabled={!!user.twoFactorConfirmation}
                />

                <StatusCard
                  label="Refresh Token"
                  enabled={!!user.hashedRefreshToken}
                />
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 pt-2 sm:grid-cols-2">
                <InfoItem
                  label="Ban Until"
                  value={
                    user.banUntil
                      ? formatDate(user.banUntil)
                      : "Not banned"
                  }
                />

                <InfoItem
                  label="Password"
                  value="Configured"
                />
              </div>
            </section>

            <Separator />

            <section className="space-y-3">
              <SectionTitle
                icon={<BadgeCheck className="h-4 w-4" />}
                title="Providers"
              />

              {user.providers.length === 0 ? (
                <EmptyValue text="No providers connected" />
              ) : (
                <div className="space-y-3">
                  {user.providers.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      provider={provider}
                    />
                  ))}
                </div>
              )}
            </section>

            <Separator />

            <section className="space-y-3">
              <SectionTitle
                icon={<CalendarDays className="h-4 w-4" />}
                title="Timestamps"
              />

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <InfoItem
                  label="Created At"
                  value={formatDate(user.createdAt)}
                />

                <InfoItem
                  label="Updated At"
                  value={formatDate(user.updatedAt)}
                />
              </div>
            </section>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}