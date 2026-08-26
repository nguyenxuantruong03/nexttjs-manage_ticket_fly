export interface FlyCrewSchedule {
  crewId: string;

  startTime: Date;

  endTime: Date;

  dutyId: string;

  tripId?: string;
}