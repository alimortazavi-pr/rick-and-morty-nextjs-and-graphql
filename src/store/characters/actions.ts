import { AppThunk } from "@/store";

//Reducer
import { characterReducer } from "@/store/characters";

//Actions from reducer
export const { setCharacters } = characterReducer.actions;
