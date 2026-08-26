import {
  AirportTransferDriver,
  AirportTransferDriverLanguage,
} from "./vehicle/driver.types";

export interface AirportTransferDriverLanguageMapper {
  id: string;

  driverId: string;

  driver: AirportTransferDriver;

  languageId: string;

  language: AirportTransferDriverLanguage;

  createdAt: string;
}