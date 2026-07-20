export enum Role {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

export enum ReviewStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  HIDDEN = "hidden",
}

export enum Gender {
  FEMALE = "Female",
  MALE = "Male",
  OTHER = "Other",
}

// ======================================================
// Inventory Lock Status
// ======================================================

export enum InventoryLockStatus {
  LOCKED = "locked",

  CONVERTED = "converted",

  EXPIRED = "expired",

  RELEASED = "released",
}

// ======================================================
// Week Day
// ======================================================

export enum WeekDay {
  MONDAY = "monday",

  TUESDAY = "tuesday",

  WEDNESDAY = "wednesday",

  THURSDAY = "thursday",

  FRIDAY = "friday",

  SATURDAY = "saturday",

  SUNDAY = "sunday",
}
