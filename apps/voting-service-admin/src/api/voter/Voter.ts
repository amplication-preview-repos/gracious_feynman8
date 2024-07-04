import { Vote } from "../vote/Vote";

export type Voter = {
  citizenId: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
  votes?: Array<Vote>;
};
