import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`
    mutation createCustomer(
      $name: String
      $phone: String
      $email: String
      $card_id: String
      $disabled: Boolean
      $unique_password: String
    ){
        insert_customers_one(
          object:{
           name: $name
           phone: $phone
           email: $email
           card_id: $card_id
           disabled: $disabled
           unique_password: $unique_password
          }
        ){
            name
            phone
            email
            card_id
            disabled
            unique_password
        }
    }
` 

export const UPDATE_CUSTOMER_BY_ID = gql`
  mutation updateCustomer(
    $id: uuid!
    $name: String
    $phone: String
    $email: String
    $card_id: String
    $disabled: Boolean
    $unique_password: String
  ) {
    update_customers_by_pk(
      pk_columns: { id: $id }
      _set: {
        id: $id
        name: $name
        phone: $phone
        email: $email
        card_id: $card_id
        disabled: $disabled
      }
    ) {
      id
      name
      phone
      email
      card_id
      disabled
      unique_password
    }
  }
`;