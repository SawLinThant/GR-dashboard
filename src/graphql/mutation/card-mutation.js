import { gql } from "@apollo/client";

export const CREATE_CARD = gql`
  mutation createCard(
    $card_number: String
    $card_password: String
    $balance: numeric
  ) {
    insert_cards_one(
      object: {
        card_number: $card_number
        card_password: $card_password
        balance: $balance
      }
    ) {
      card_number
      card_password
      created_at
      updated_at
      disabled
      balance
    }
  }
`;
