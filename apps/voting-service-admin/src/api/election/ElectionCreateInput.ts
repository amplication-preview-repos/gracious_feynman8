import { VoteCreateNestedManyWithoutElectionsInput } from "./VoteCreateNestedManyWithoutElectionsInput";

export type ElectionCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  startTime?: Date | null;
  title?: string | null;
  votes?: VoteCreateNestedManyWithoutElectionsInput;
};
