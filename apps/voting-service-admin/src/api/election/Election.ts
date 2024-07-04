import { Vote } from "../vote/Vote";

export type Election = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  votes?: Array<Vote>;
};
