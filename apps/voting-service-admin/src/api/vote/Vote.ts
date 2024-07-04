import { Election } from "../election/Election";
import { Voter } from "../voter/Voter";

export type Vote = {
  candidate: string | null;
  createdAt: Date;
  election?: Election | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  voter?: Voter | null;
};
