import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hash" source="hash" />
        <TextInput label="previousHash" source="previousHash" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="transactionData" multiline source="transactionData" />
      </SimpleForm>
    </Edit>
  );
};
