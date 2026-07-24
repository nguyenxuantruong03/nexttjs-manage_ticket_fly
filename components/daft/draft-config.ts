export enum DraftEntity {
  Currency = "currency",
  City = "city",
  ProviderBooking = "providerBooking",
  Country = "country",
  AirportTransfer = "airportTransfer",
  Ticketbus = "ticketbus",
  Hotel = "hotel",
  CarRental = "carRental",
  Ticketflight = "ticketflight",
  Airline = "airline",
  Yacht = "yacht",
  User = "user",
}

export const draftConfig = {
  [DraftEntity.User]: {
    titleFields: ["name"],
  },
  [DraftEntity.Currency]: {
    titleFields: ["code", "name", "symbol"],
  },

  [DraftEntity.City]: {
    titleFields: ["name"],
  },

  [DraftEntity.ProviderBooking]: {
    titleFields: ["name"],
  },

  [DraftEntity.Country]: {
    titleFields: ["name"],
  },

  [DraftEntity.AirportTransfer]: {
    titleFields: ["name", "slug"],
  },

  [DraftEntity.Ticketbus]: {
    titleFields: ["routeName", "name"],
  },

  [DraftEntity.Hotel]: {
    titleFields: ["name", "slug"],
  },

  [DraftEntity.CarRental]: {
    titleFields: ["name"],
  },

  [DraftEntity.Ticketflight]: {
    titleFields: ["flightNumber"],
  },

  [DraftEntity.Airline]: {
    titleFields: ["name"],
  },

  [DraftEntity.Yacht]: {
    titleFields: ["name"],
  },
} satisfies Record<
  DraftEntity,
  {
    titleFields: readonly string[];
  }
>;
