import { PayloadAction } from "@reduxjs/toolkit";

//Interfaces
import {
  ICharacter,
  ICharacterState,
} from "@/common/interfaces/character.interface";

const reducers = {
  setCharacters(
    state: ICharacterState,
    action: PayloadAction<ICharacter[]>
  ): ICharacterState {
    return {
      ...state,
      characters: action.payload,
    };
  },
};

export default reducers;
