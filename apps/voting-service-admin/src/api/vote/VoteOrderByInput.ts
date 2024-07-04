import { SortOrder } from "../../util/SortOrder";

export type VoteOrderByInput = {
  candidate?: SortOrder;
  createdAt?: SortOrder;
  electionId?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  voterId?: SortOrder;
};
