import { gql } from "@apollo/client";

export const CREATE_CASHIN_AMOUNT = gql`
  mutation createCashinAmount(
    $amount: numeric
  ) {
    insert_cashin_amounts_one(
      object: {
        amount: $amount
      }
    ) {
      id
      amount
      created_at
      updated_at
    }
  }
`;