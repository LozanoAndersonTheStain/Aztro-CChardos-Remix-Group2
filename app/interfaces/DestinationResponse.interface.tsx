import type { City } from "./City.interface";

export interface DestinationResponse {
  firstCity: City;
  secondCity: City;
  success: boolean;
  message: string;
}