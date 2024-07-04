import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ELECTION_TITLE_FIELD } from "../election/ElectionTitle";
import { VOTER_TITLE_FIELD } from "./VoterTitle";

export const VoterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="citizenID" source="citizenId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Vote" target="voterId" label="Votes">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
