import { User } from "@/types/users/auth/users";
import { CarRental } from "../core/car-rental.types";

export interface CarRentalFavorite {
  id: string;

  userId: string;
  user: User;

  rentalId: string;
  rental: CarRental;

  createdAt: string;
}