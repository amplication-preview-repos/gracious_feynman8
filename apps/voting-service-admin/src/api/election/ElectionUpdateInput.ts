import { VoteUpdateManyWithoutElectionsInput } from "./VoteUpdateManyWithoutElectionsInput";

export type ElectionUpdateInput = {
  description?: string | null;
  endTime?: Date | null;
  startTime?: Date | null;
  title?: string | null;
  votes?: VoteUpdateManyWithoutElectionsInput;
};
