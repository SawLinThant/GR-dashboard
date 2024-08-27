import { gql } from "@apollo/client";

export const GET_CASHIN_AMOUNT = gql`
  query getCashinAmount {
    cashin_amounts {
      id
      amount
      created_at
      updated_at
    }
  }
`;