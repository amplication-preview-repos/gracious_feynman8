import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";

export type VoterWhereInput = {
  citizenId?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  votes?: VoteListRelationFilter;
};
