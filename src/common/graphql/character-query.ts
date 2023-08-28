import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        status
        species
      }
    }
  }
`;