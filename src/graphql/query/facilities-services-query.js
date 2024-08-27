import { gql } from "@apollo/client";

export const GET_FACILITY_SERIVCES = gql`
  query getFacilityServices {
    facility_services {
      id
      name
      price
      facility_id
      created_at
      updated_at
    }
  }
`;