
export interface YachtMeetAndGreet {
  id: string;

  policiesId: string;

  available: boolean;

  pickupSign?: boolean | null;

  staffLanguage: string[];

  meetingPoint?: string | null;
}