import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";
import { VoterWhereUniqueInput } from "../voter/VoterWhereUniqueInput";

export type VoteCreateInput = {
  candidate?: string | null;
  election?: ElectionWhereUniqueInput | null;
  timestamp?: Date | null;
  voter?: VoterWhereUniqueInput | null;
};
