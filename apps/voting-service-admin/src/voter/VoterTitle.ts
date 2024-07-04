import { Voter as TVoter } from "../api/voter/Voter";

export const VOTER_TITLE_FIELD = "firstName";

export const VoterTitle = (record: TVoter): string => {
  return record.firstName?.toString() || String(record.id);
};
