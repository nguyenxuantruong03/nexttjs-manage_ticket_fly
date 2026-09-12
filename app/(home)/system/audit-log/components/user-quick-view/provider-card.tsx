"use client";

import {
  BadgeCheck,
  Globe,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { MediaPreview } from "@/components/common/image";
import { Separator } from "@/components/ui/separator";
import { ProviderBooking } from "@/types/users/provider-bookings";

import { ContactItem } from "./contact-item";
import { EmptyValue } from "./empty-value";
import { InfoItem } from "./info-item";
import { OperatingStatusBadge } from "./operating-status-badge";
import { ProviderStatusBadge } from "./provider-status-badge";
import { SocialLink } from "./social-link";
import { StatCard } from "./stat-card";
import { formatDate } from "./utils";

interface ProviderCardProps {
  provider: ProviderBooking;
}

export function ProviderCard({
  provider,
}: ProviderCardProps) {
  return (
    <div className="rounded-xl border bg-card">
      <div className="flex items-center gap-3 p-4">
        <div className="shrink-0">
          {provider.logo ? (
            <MediaPreview
              path={provider.logo}
              name={provider.displayName}
              className="h-12 w-12 rounded-lg object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-lg font-semibold text-muted-foreground">
              {(
                provider.displayName?.trim()?.charAt(0) || "P"
              ).toUpperCase()}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="truncate text-sm font-semibold">
              {provider.displayName}
            </h4>

            {provider.verified && (
              <BadgeCheck className="h-4 w-4 text-blue-500" />
            )}
          </div>

          {provider.officialName &&
            provider.officialName !== provider.displayName && (
              <p className="truncate text-xs text-muted-foreground">
                {provider.officialName}
              </p>
            )}

          {provider.shortName && (
            <p className="text-xs text-muted-foreground">
              {provider.shortName}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <ProviderStatusBadge status={provider.status} />
          <OperatingStatusBadge
            status={provider.operatingStatus}
          />
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-x-6 gap-y-3 p-4 sm:grid-cols-2">
        <InfoItem
          label="Company Type"
          value={provider.companyType}
        />

        <InfoItem
          label="Registration Number"
          value={provider.registrationNumber}
          mono
        />

        <InfoItem
          label="Tax Code"
          value={provider.taxCode}
          mono
        />

        <InfoItem
          label="License Number"
          value={provider.licenseNumber}
          mono
        />

        <InfoItem
          label="Founded Year"
          value={
            provider.foundedYear
              ? String(provider.foundedYear)
              : null
          }
        />

        <InfoItem
          label="Employees"
          value={
            provider.employeeCount
              ? provider.employeeCount.toLocaleString()
              : null
          }
        />
      </div>

      <Separator />

      <div className="space-y-3 p-4">
        <h5 className="text-xs font-semibold text-muted-foreground">
          Contact
        </h5>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ContactItem
            icon={<Mail className="h-3.5 w-3.5" />}
            label="Email"
            value={provider.email}
          />

          <ContactItem
            icon={<Phone className="h-3.5 w-3.5" />}
            label="Phone"
            value={provider.phone}
          />

          <ContactItem
            icon={<Phone className="h-3.5 w-3.5" />}
            label="Hotline"
            value={provider.hotline}
          />

          <ContactItem
            icon={<Globe className="h-3.5 w-3.5" />}
            label="Website"
            value={provider.website}
          />
        </div>
      </div>

      {(provider.city ||
        provider.state ||
        provider.country ||
        provider.postalCode) && (
        <>
          <Separator />

          <div className="space-y-3 p-4">
            <h5 className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Location
            </h5>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InfoItem label="City" value={provider.city} />
              <InfoItem label="State" value={provider.state} />
              <InfoItem label="Country" value={provider.country} />
              <InfoItem
                label="Postal Code"
                value={provider.postalCode}
              />
            </div>

            {provider.latitude !== null &&
              provider.latitude !== undefined &&
              provider.longitude !== null &&
              provider.longitude !== undefined && (
                <InfoItem
                  label="Coordinates"
                  value={`${provider.latitude}, ${provider.longitude}`}
                  mono
                />
              )}
          </div>
        </>
      )}

      <Separator />

      <div className="space-y-3 p-4">
        <h5 className="text-xs font-semibold text-muted-foreground">
          Rating & Reviews
        </h5>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <StatCard
            icon={<Star className="h-4 w-4" />}
            label="Rating"
            value={provider.averageRating.toFixed(1)}
          />

          <StatCard
            label="Reviews"
            value={provider.totalReviews.toLocaleString()}
          />

          <StatCard
            label="Ratings"
            value={provider.totalRatings.toLocaleString()}
          />

          <StatCard
            label="Customers"
            value={provider.totalCustomers.toLocaleString()}
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-3 p-4">
        <h5 className="text-xs font-semibold text-muted-foreground">
          Booking Statistics
        </h5>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <StatCard
            label="Total"
            value={provider.totalBookings.toLocaleString()}
          />

          <StatCard
            label="Completed"
            value={provider.completedBookings.toLocaleString()}
          />

          <StatCard
            label="Cancelled"
            value={provider.cancelledBookings.toLocaleString()}
          />

          <StatCard
            label="Customers"
            value={provider.totalCustomers.toLocaleString()}
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-3 p-4">
        <h5 className="text-xs font-semibold text-muted-foreground">
          Services
        </h5>

        {provider.bookingTypes.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {provider.bookingTypes.map((bookingType) => (
              <span
                key={bookingType.id}
                className="rounded-md border bg-muted/30 px-2.5 py-1 text-xs font-medium"
              >
                {bookingType.name}
              </span>
            ))}
          </div>
        ) : (
          <EmptyValue text="No services configured" />
        )}
      </div>

      {(provider.facebook ||
        provider.instagram ||
        provider.youtube ||
        provider.linkedin) && (
        <>
          <Separator />

          <div className="space-y-3 p-4">
            <h5 className="text-xs font-semibold text-muted-foreground">
              Social Media
            </h5>

            <div className="flex flex-wrap gap-2">
              {provider.facebook && (
                <SocialLink
                  label="Facebook"
                  value={provider.facebook}
                />
              )}

              {provider.instagram && (
                <SocialLink
                  label="Instagram"
                  value={provider.instagram}
                />
              )}

              {provider.youtube && (
                <SocialLink
                  label="YouTube"
                  value={provider.youtube}
                />
              )}

              {provider.linkedin && (
                <SocialLink
                  label="LinkedIn"
                  value={provider.linkedin}
                />
              )}
            </div>
          </div>
        </>
      )}

      <Separator />

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <InfoItem
          label="Created At"
          value={formatDate(provider.createdAt)}
        />

        <InfoItem
          label="Updated At"
          value={formatDate(provider.updatedAt)}
        />
      </div>
    </div>
  );
}