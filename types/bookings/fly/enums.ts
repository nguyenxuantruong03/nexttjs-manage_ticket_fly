// fly-enums.types.ts


export enum FlyImageCategory {
  cover = "cover",
  aircraft = "aircraft",
  cabin = "cabin",
  business = "business",
  economy = "economy",
  first_class = "first_class",
  crew = "crew",
  lounge = "lounge",
  meal = "meal",
  baggage = "baggage",
  seat = "seat",
  logo = "logo",
  other = "other",
}



export enum FlyAirlineImageCategory {
  logo = "logo",
  banner = "banner",
  aircraft = "aircraft",
  lounge = "lounge",
  office = "office",
  other = "other",
}



export enum FlyTripStatus {
  scheduled = "scheduled",
  boarding = "boarding",
  departed = "departed",
  delayed = "delayed",
  landed = "landed",
  cancelled = "cancelled",
}



export enum FlyRouteType {
  domestic = "domestic",
  international = "international",
}



export enum FlyCabinClass {
  economy = "economy",
  premium_economy = "premium_economy",
  business = "business",
  first = "first",
}



export enum FlyAircraftImageCategory {
  exterior = "exterior",
  cabin = "cabin",
  cockpit = "cockpit",
  economy = "economy",
  premium_economy = "premium_economy",
  business = "business",
  first = "first",
  seat = "seat",
  galley = "galley",
  lavatory = "lavatory",
  other = "other",
}



export enum FlySeatType {
  standard = "standard",
  preferred = "preferred",
  extra_legroom = "extra_legroom",
  emergency_exit = "emergency_exit",
  bassinet = "bassinet",
  premium = "premium",
  business = "business",
  first = "first",
}



export enum FlyFareRuleType {
  refundable = "refundable",
  cancellation = "cancellation",
  change = "change",
  no_show = "no_show",
  baggage = "baggage",
  meal = "meal",
  seat = "seat",
  lounge = "lounge",
  upgrade = "upgrade",
}



export enum FlyPriceRuleType {
  discount = "discount",
  coupon = "coupon",
  promotion = "promotion",
  holiday = "holiday",
  seasonal = "seasonal",
  member = "member",
}



export enum FlyRefundType {
  none = "none",
  partial = "partial",
  full = "full",
}



export enum FlyBookingStatus {
  pending = "pending",
  waiting_payment = "waiting_payment",
  confirmed = "confirmed",
  ticketed = "ticketed",
  checked_in = "checked_in",
  boarded = "boarded",
  completed = "completed",
  cancelled = "cancelled",
  refunded = "refunded",
}



export enum PassengerType {
  adult = "adult",
  child = "child",
  infant = "infant",
}



export enum PassengerTitle {
  mr = "mr",
  ms = "ms",
  mrs = "mrs",
  miss = "miss",
  master = "master",
}



export enum FlyMealType {
  standard = "standard",
  vegetarian = "vegetarian",
  vegan = "vegan",
  halal = "halal",
  kosher = "kosher",
  gluten_free = "gluten_free",
  diabetic = "diabetic",
  child = "child",
  seafood = "seafood",
  premium = "premium",
}



export enum FlyAddonType {
  seat = "seat",
  baggage = "baggage",
  meal = "meal",
  insurance = "insurance",
  lounge = "lounge",
  wifi = "wifi",
  fast_track = "fast_track",
  priority_boarding = "priority_boarding",
  airport_transfer = "airport_transfer",
  airport_hotel = "airport_hotel",
  sim = "sim",
  esim = "esim",
  carbon_offset = "carbon_offset",
  pet = "pet",
  sports_equipment = "sports_equipment",
  musical_instrument = "musical_instrument",
  wheelchair = "wheelchair",
  assistance = "assistance",
  other = "other",
}



export enum FlyOperationStatus {
  scheduled = "scheduled",
  check_in = "check_in",
  boarding = "boarding",
  gate_closed = "gate_closed",
  departed = "departed",
  delayed = "delayed",
  diverted = "diverted",
  landed = "landed",
  cancelled = "cancelled",
}



export enum FlyTimelineType {
  scheduled = "scheduled",
  check_in_open = "check_in_open",
  boarding = "boarding",
  final_call = "final_call",
  gate_closed = "gate_closed",
  departed = "departed",
  arrived = "arrived",
}



export enum FlyDelayReason {
  weather = "weather",
  technical = "technical",
  airport = "airport",
  crew = "crew",
  security = "security",
  air_traffic = "air_traffic",
  operational = "operational",
  other = "other",
}



export enum FlyCrewRole {
  captain = "captain",
  first_officer = "first_officer",
  cabin_manager = "cabin_manager",
  cabin_crew = "cabin_crew",
}



export enum FlyCrewDuty {
  flight = "flight",
  standby = "standby",
  training = "training",
  leave = "leave",
  office = "office",
}