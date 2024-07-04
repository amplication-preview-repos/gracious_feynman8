import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VoterWhereUniqueInput } from "../voter/VoterWhereUniqueInput";

export type VoteWhereInput = {
  candidate?: StringNullableFilter;
  election?: ElectionWhereUniqueInput;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  voter?: VoterWhereUniqueInput;
};
