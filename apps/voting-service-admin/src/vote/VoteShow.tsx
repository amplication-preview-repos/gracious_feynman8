import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ELECTION_TITLE_FIELD } from "../election/ElectionTitle";
import { VOTER_TITLE_FIELD } from "../voter/VoterTitle";

export const VoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
