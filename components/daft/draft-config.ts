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
  HotelRoomType = "hotelRoomType",
  HotelCheckInPolicy = "hotelCheckInPolicy",
  Facility = "facility",
  FacilityCategory = "facilityCategory",
  BookingType = "bookingType",
  Promotion = "promotion",
  Coupon = "coupon",
  ExtraType = "extraType",
  AirportTransferPriceRuleType = "airportTransferPriceRuleType",
  AirportTransferRouteType = "airportTransferRouteType",
  AirportTransferServiceType = "airportTransferServiceType",
  AirportTransferVehicleType = "airportTransferVehicleType",
  BusSeatType = "busSeatType",
  BusVehicleType = "busVehicleType",
  CarRentalVehicleType = "carRentalVehicleType",
  CarRentalInsuranceBenefitType = "carRentalInsuranceBenefitType",
  CarRentalInsuranceType = "carRentalInsuranceType",
  CarRentalDocumentType = "carRentalDocumentType",
  YachtCondition = "yachtCondition",
  YachtCrewRole = "yachtCrewRole",
  YachtExtraCategory = "yachtExtraCategory",
  YachtFeeType = "yachtFeeType",
  YachtServiceType = "yachtServiceType",
  YachtType = "yachtType",
  FlyAddonType = "flyAddonType",
  FlyCabinClass = "flyCabinClass",
  FlyCrewDuty = "flyCrewDuty",
  FlyCrewRole = "flyCrewRole",
  FlyDelayReason = "flyDelayReason",
  FlyFareRuleType = "flyFareRuleType",
  FlyMealType = "flyMealType",
  FlyPriceRuleType = "flyPriceRuleType",
  FlyAircraft = "flyAircraft",
  FlyAirline = "flyAirline",
  FlySeatType = "flySeatType",
  FlyAlliance = "flyAlliance",
  FlyCrew = "flyCrew",
  FlyAircraftType = "flyAircraftType",
  VehicleType = "vehicleType",
  FuelType = "fuelType",
  RouteType = "routeType",
  ServiceType = "serviceType",
  PriceRuleType = "priceRuleType",
  BookingItemType = "bookingItemType",
  Extra = "extra",
  ExtraFeeType = "extraFeeType",
  Package = "package",
  PolicyType = "policyType",
  Policy = "policy",
  PromotionRule = "promotionRule",
  Continent = "continent",
  PlaceType = "place-type",
  MediaCategory = "mediaCategory",
  MediaAsset = "mediaAsset",
  ReasonCode = "reasonCode",
  ReasonContext = "reasonContext",
  LegalDocument = "legalDocument",
  TaxRule = "taxRule",
  RegulationCategory = "regulationCategory",
  Regulation = "regulation",
  FeatureFlag = "featureFlag",
  BlacklistEntry = "blacklistEntry",
  WhitelistEntry = "whitelistEntry",
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
  [DraftEntity.HotelCheckInPolicy]: {
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
  [DraftEntity.Facility]: {
    titleFields: ["name"],
  },
  [DraftEntity.FacilityCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.BookingType]: {
    titleFields: ["name"],
  },
  [DraftEntity.Promotion]: {
    titleFields: ["name"],
  },
  [DraftEntity.Coupon]: {
    titleFields: ["name"],
  },
  [DraftEntity.ExtraType]: {
    titleFields: ["name"],
  },
  [DraftEntity.AirportTransferPriceRuleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.AirportTransferRouteType]: {
    titleFields: ["name"],
  },
  [DraftEntity.AirportTransferServiceType]: {
    titleFields: ["name"],
  },
  [DraftEntity.AirportTransferVehicleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.BusSeatType]: {
    titleFields: ["name"],
  },
  [DraftEntity.BusVehicleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.CarRentalVehicleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.CarRentalInsuranceBenefitType]: {
    titleFields: ["name"],
  },
  [DraftEntity.CarRentalInsuranceType]: {
    titleFields: ["name"],
  },
  [DraftEntity.CarRentalDocumentType]: {
    titleFields: ["name"],
  },
  [DraftEntity.YachtCondition]: {
    titleFields: ["name"],
  },
  [DraftEntity.YachtCrewRole]: {
    titleFields: ["name"],
  },
  [DraftEntity.YachtExtraCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.YachtFeeType]: {
    titleFields: ["name"],
  },
  [DraftEntity.YachtServiceType]: {
    titleFields: ["name"],
  },
  [DraftEntity.YachtType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyAddonType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyCabinClass]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyCrewDuty]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyAircraftType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyCrewRole]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyDelayReason]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyFareRuleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyMealType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyPriceRuleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyAircraft]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyAirline]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlySeatType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyAlliance]: {
    titleFields: ["name"],
  },
  [DraftEntity.FlyCrew]: {
    titleFields: ["name"],
  },
  [DraftEntity.VehicleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.FuelType]: {
    titleFields: ["name"],
  },
  [DraftEntity.RouteType]: {
    titleFields: ["name"],
  },
  [DraftEntity.ServiceType]: {
    titleFields: ["name"],
  },
  [DraftEntity.PriceRuleType]: {
    titleFields: ["name"],
  },
  [DraftEntity.BookingItemType]: {
    titleFields: ["name"],
  },
  [DraftEntity.Extra]: {
    titleFields: ["name"],
  },
  [DraftEntity.ExtraFeeType]: {
    titleFields: ["name"],
  },
  [DraftEntity.Package]: {
    titleFields: ["name"],
  },
  [DraftEntity.PolicyType]: {
    titleFields: ["name"],
  },
  [DraftEntity.Policy]: {
    titleFields: ["name"],
  },
  [DraftEntity.PromotionRule]: {
    titleFields: ["name"],
  },
  [DraftEntity.Continent]: {
    titleFields: ["name"],
  },
  [DraftEntity.PlaceType]: {
    titleFields: ["name"],
  },
  [DraftEntity.MediaCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.MediaAsset]: {
    titleFields: ["name"],
  },
  [DraftEntity.ReasonCode]: {
    titleFields: ["name"],
  },
  [DraftEntity.ReasonContext]: {
    titleFields: ["name"],
  },
  [DraftEntity.LegalDocument]: {
    titleFields: ["name"],
  },
  [DraftEntity.TaxRule]: {
    titleFields: ["name"],
  },
  [DraftEntity.RegulationCategory]: {
    titleFields: ["name"],
  },
  [DraftEntity.Regulation]: {
    titleFields: ["name"],
  },
  [DraftEntity.FeatureFlag]: {
    titleFields: ["name"],
  },
  [DraftEntity.BlacklistEntry]: {
    titleFields: ["name"],
  },
  [DraftEntity.WhitelistEntry]: {
    titleFields: ["name"],
  },
} satisfies Record<
  DraftEntity,
  {
    titleFields: readonly string[];
  }
>;
