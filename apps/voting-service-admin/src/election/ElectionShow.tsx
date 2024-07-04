import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ELECTION_TITLE_FIELD } from "./ElectionTitle";
import { VOTER_TITLE_FIELD } from "../voter/VoterTitle";

export const ElectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Vote" target="electionId" label="Votes">
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
