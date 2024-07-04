export type Block = {
  createdAt: Date;
  hash: string | null;
  id: string;
  previousHash: string | null;
  timestamp: Date | null;
  transactionData: string | null;
  updatedAt: Date;
};
