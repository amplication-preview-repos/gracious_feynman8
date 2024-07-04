import { SortOrder } from "../../util/SortOrder";

export type VoterOrderByInput = {
  citizenId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
