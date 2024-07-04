import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ElectionTitle } from "../election/ElectionTitle";
import { VoterTitle } from "../voter/VoterTitle";

export const VoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="candidate" source="candidate" />
        <ReferenceInput
          source="election.id"
          reference="Election"
          label="election"
        >
          <SelectInput optionText={ElectionTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="voter.id" reference="Voter" label="voter">
          <SelectInput optionText={VoterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
