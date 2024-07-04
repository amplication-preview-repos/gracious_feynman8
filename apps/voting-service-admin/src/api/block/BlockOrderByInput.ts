import { SortOrder } from "../../util/SortOrder";

export type BlockOrderByInput = {
  createdAt?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  previousHash?: SortOrder;
  timestamp?: SortOrder;
  transactionData?: SortOrder;
  updatedAt?: SortOrder;
};
