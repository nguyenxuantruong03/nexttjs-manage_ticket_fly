export interface HotelAccessibility {
  id: string;

  facilitiesId: string;

  wheelchairAccessible?: boolean | null;

  accessibleRoom?: boolean | null;
  elevator?: boolean | null;
  brailleSignage?: boolean | null;
  accessibleBathroom?: boolean | null;
  hearingAccessible?: boolean | null;
  visualAccessible?: boolean | null;
  ramp?: boolean | null;
}
