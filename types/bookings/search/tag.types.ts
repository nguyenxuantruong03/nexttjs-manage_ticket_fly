export enum TagType {
  CITY = "CITY",
  COUNTRY = "COUNTRY",
  HOTEL = "HOTEL",
  AIRPORT_TRANSFER = "AIRPORT_TRANSFER",
  TICKET_FLY = "TICKET_FLY",
  TICKET_BUS = "TICKET_BUS",
  CAR_RENTAL = "CAR_RENTAL",
  YACHT = "YACHT",
  PLACE = "PLACE",
}

export interface SearchTag {
  id: string;
  name: string;
  type: TagType;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
