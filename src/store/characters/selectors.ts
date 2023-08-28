import { RootState } from "@/store/index";

//Interfaces
import { ICharacter } from "@/common/interfaces/character.interface";

export function charactersSelector(state: RootState): ICharacter[] {
  return state.characters.characters;
}
