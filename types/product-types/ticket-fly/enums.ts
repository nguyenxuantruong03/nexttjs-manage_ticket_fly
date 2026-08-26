// ======================================================
// Fly Trip Status
// ======================================================

export enum FlyTripStatus {
  scheduled = "scheduled",
  boarding = "boarding",
  departed = "departed",
  delayed = "delayed",
  landed = "landed",
  cancelled = "cancelled",
}

// ======================================================
// Fly Booking Status
// ======================================================

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

// ======================================================
// Passenger Type
// ======================================================

export enum PassengerType {
  adult = "adult",
  child = "child",
  infant = "infant",
}

// ======================================================
// Passenger Title
// ======================================================

export enum PassengerTitle {
  mr = "mr",
  ms = "ms",
  mrs = "mrs",
  miss = "miss",
  master = "master",
}

// ======================================================
// Fly Operation Status
// ======================================================

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

// ======================================================
// Fly Timeline Type
// ======================================================

export enum FlyTimelineType {
  scheduled = "scheduled",
  check_in_open = "check_in_open",
  boarding = "boarding",
  final_call = "final_call",
  gate_closed = "gate_closed",
  departed = "departed",
  arrived = "arrived",
}