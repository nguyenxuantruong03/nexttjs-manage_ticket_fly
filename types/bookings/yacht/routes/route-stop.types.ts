
export interface YachtRouteStop {
  id: string;

  routeId: string;

  name: string;

  addressId?: string | null;

  stopDurationMinutes?: number | null;

  order: number;
}
