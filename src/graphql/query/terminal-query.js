import { gql } from "@apollo/client";

export const GET_TERMINALS = gql`
  query getTerminals {
    terminals {
      id
      terminal_number
      disabled
      created_at
      updated_at
    }
  }
`;

export const GET_TERMINAL_BY_ID = gql`
   query getTerminalsById($id: uuid!) {
    customers(where: { id: { _eq: $id } }) {
      id
      terminal_number
      disabled
      created_at
      updated_at
    }
  }
`