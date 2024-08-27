import { gql } from "@apollo/client";

export const GET_FACILITIES = gql`
  query getFacilities {
    facilities {
      id
      name
      phone
      email
      created_at
      updated_at
      establishment_id
    }
  }
`;
