import { VoteCreateNestedManyWithoutVotersInput } from "./VoteCreateNestedManyWithoutVotersInput";

export type VoterCreateInput = {
  citizenId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  votes?: VoteCreateNestedManyWithoutVotersInput;
};
