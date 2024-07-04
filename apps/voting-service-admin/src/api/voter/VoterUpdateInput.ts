import { VoteUpdateManyWithoutVotersInput } from "./VoteUpdateManyWithoutVotersInput";

export type VoterUpdateInput = {
  citizenId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  votes?: VoteUpdateManyWithoutVotersInput;
};
