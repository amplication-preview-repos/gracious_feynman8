import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";

export type ElectionWhereInput = {
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  votes?: VoteListRelationFilter;
};
