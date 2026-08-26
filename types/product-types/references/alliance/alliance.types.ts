import { FlyAirline } from "../airline/airline.types";

export interface FlyAlliance {
  id: string;

  name: string;

  code: string;

  logo?: string;

  description?: string;

  airlines?: FlyAllianceMember[];

  createdAt: Date;

  updatedAt: Date;
}


export interface FlyAllianceMember {
  id: string;

  allianceId: string;
  alliance?: FlyAlliance;

  airlineId: string;
  airline?: FlyAirline;

  joinedAt?: Date;
}