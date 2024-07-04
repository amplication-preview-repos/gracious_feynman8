import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlockWhereInput = {
  hash?: StringNullableFilter;
  id?: StringFilter;
  previousHash?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transactionData?: StringNullableFilter;
};
