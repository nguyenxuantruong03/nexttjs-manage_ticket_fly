
export interface HotelTransportation {
  id: string;

  facilitiesId: string;

  airportShuttle?: boolean | null;

  shuttleFee?: number | null;

  taxiService?: boolean | null;
  carRental?: boolean | null;
  bicycleRental?: boolean | null;
  trainStationTransfer?: boolean | null;
}
