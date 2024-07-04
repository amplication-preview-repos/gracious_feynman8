import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ELECTION_TITLE_FIELD } from "../election/ElectionTitle";
import { VOTER_TITLE_FIELD } from "../voter/VoterTitle";

export const VoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Votes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="candidate" source="candidate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="election"
          source="election.id"
          reference="Election"
        >
          <TextField source={ELECTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="voter" source="voter.id" reference="Voter">
          <TextField source={VOTER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
