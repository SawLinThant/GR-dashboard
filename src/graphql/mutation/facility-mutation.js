import { gql } from "@apollo/client";

export const CREATE_FACILITY = gql`
    mutation createfacility(
      $name:String
      $phone:String
      $email:String
      $establishment_id:uuid
    ){
        insert_facilities_one(
          object:{
           name: $name
           phone: $phone
           email: $email
           establishment_id:$establishment_id
          }
        ){
            name
            phone
            email
            created_at
            updated_at
            establishment_id
        }
    }
` ;