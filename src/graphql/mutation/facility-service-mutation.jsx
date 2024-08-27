import { gql } from "@apollo/client";

export const CREATE_FACILITY_SERVICE = gql`
  mutation createFacilityService(
    $name: String
    $price: numeric
    $facility_id: uuid
  ) {
    insert_facility_services_one(
      object: { name: $name, price: $price, facility_id: $facility_id }
    ) {
      id
      name
      price
      facility_id
      created_at
      updated_at
    }
  }
`;
