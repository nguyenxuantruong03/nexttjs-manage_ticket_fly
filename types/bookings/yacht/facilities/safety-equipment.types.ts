
export interface YachtSafetyEquipment {
  id: string;

  vehicleId: string;

  lifeJacket?: boolean | null;

  lifeRaft?: boolean | null;

  fireExtinguisher?: boolean | null;

  fireAlarm?: boolean | null;

  firstAidKit?: boolean | null;

  gps?: boolean | null;

  radar?: boolean | null;

  emergencyRadio?: boolean | null;

  insurance?: boolean | null;
}