import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query getCustomers {
    customers {
      id
      name
      phone
      email
      card_id
      created_at
      updated_at
      disabled
      unique_password
    }
  }
`;

export const GET_CUSTOMERS_BY_STATUS = gql`
  query getCustomersByStatus($disabled: Boolean!) {
    customers(where: { disabled: { _eq: $disabled } }) {
      id
      name
      phone
      email
      card_id
      created_at
      updated_at
      disabled
      unique_password
    }
  }
`;
