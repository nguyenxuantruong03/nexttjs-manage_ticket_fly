import { User } from "@/types/users/auth/users";
import { Yacht } from "../core/yacht.types";

export interface YachtFavorite {
  id: string;

  userId: string;
  uesr: User;

  yachtId: string;
  yacht: Yacht;

  createdAt: Date;
}
