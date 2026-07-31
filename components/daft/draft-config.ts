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
  SearchTag = "searchtag",
  Address = "address",
  Ward = "ward",
  District = "district",
  Language = "language",
  Timezone = "timezone",
  Place = "place",
  FlyAirport = "flyAirport",
  HotelAccessibility = "hotelAccessibility",
  HotelBathroomType = "hotelBathroomType",
  HotelBedType = "hotelBedType",
  HotelDiningMealType = "hotelDiningMealType",
  HotelDiningServiceType = "hotelDiningServiceType",
  HotelExtraType = "hotelExtraType",
  HotelFacilityCategory = "hotelFacilityCategory",
  HotelBrand = "hotelBrand",
  HotelFacility = "hotelFacility",
  HotelMediaCategory = "hotelMediaCategory",
  HotelPolicy = "hotelPolicy",
  HotelPolicyType = "hotelPolicyType",
  HotelRatePlanType = "hotelRatePlanType",
  HotelStarRating = "hotelStarRating",
  HotelType = "hotelType",
  HotelMealPlan = "hotelMealPlan",
  HotelRoomCategory = "hotelRoomCategory",
  HotelRoomMediaCategory = "hotelRoomMediaCategory",
  HotelRoomView = "hotelRoomView",
  HotelSustainability = "hotelSustainability",
  HotelMediaAsset = "hotelMediaAsset",
  HotelRoomType="hotelRoomType"
}

export const draftConfig = {
  [DraftEntity.User]: {
    titleFields: ["name"],
  },
  [DraftEntity.Currency]: {
    titleFields: ["code", "name", "symbol"],
  },
  [DraftEntity.FlyAirport]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelAccessibility]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelBathroomType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelBedType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelDiningMealType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelDiningServiceType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelExtraType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelFacilityCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelBrand]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelFacility]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelMediaCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelPolicy]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelPolicyType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelRatePlanType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelStarRating]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelMealPlan]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelType]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelRoomCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelRoomMediaCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelRoomView]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelSustainability]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelMediaAsset]: {
    titleFields: ["name"],
  },
  [DraftEntity.HotelRoomType]: {
    titleFields: ["name"],
  },
  [DraftEntity.SearchTag]: {
    titleFields: ["name"],
  },
  [DraftEntity.Place]: {
    titleFields: ["name"],
  },
  [DraftEntity.Language]: {
    titleFields: ["name"],
  },
  [DraftEntity.Timezone]: {
    titleFields: ["name"],
  },
  [DraftEntity.City]: {
    titleFields: ["name"],
  },
  [DraftEntity.District]: {
    titleFields: ["name"],
  },
  [DraftEntity.Ward]: {
    titleFields: ["name"],
  },
  [DraftEntity.Address]: {
    titleFields: ["name"],
  },

  [DraftEntity.ProviderBooking]: {
    titleFields: ["name"],
  },

  [DraftEntity.Country]: {
    titleFields: ["name"],
  },

  [DraftEntity.AirportTransfer]: {
    titleFields: ["name"],
  },

  [DraftEntity.Ticketbus]: {
    titleFields: ["routeName", "name"],
  },

  [DraftEntity.Hotel]: {
    titleFields: ["name"],
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
