

export interface HotelSafety {
  id: string;

  facilitiesId: string;

  security24Hours?: boolean | null;

  cctv?: boolean | null;

  smokeDetector?: boolean | null;
  fireAlarm?: boolean | null;
  fireExtinguisher?: boolean | null;
  firstAidKit?: boolean | null;
  emergencyExit?: boolean | null;
  securityBox?: boolean | null;
  inRoomSafe?: boolean | null;
}