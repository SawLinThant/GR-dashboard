import { gql } from "@apollo/client";

export const CREATE_TERMINAL = gql`
  mutation createTerminal(
    $terminal_number: String
    $password: String
    $facility_id: uuid
  ) {
    insert_terminals_one(
      object: {
        terminal_number: $terminal_number
        password: $password
        facility_id: $facility_id
      }
    ) {
      id
      terminal_number
      facility_id
      created_at
      updated_at
    }
  }
`;
