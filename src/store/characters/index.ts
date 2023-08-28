import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import { ICharacterState } from "@/common/interfaces/character.interface";

//Reducers
import reducers from "@/store/characters/reducers";

const initialState: ICharacterState = {
  characters: [],
};

export const characterReducer = createSlice({
  name: "characters",
  initialState,
  reducers,
});

export default characterReducer.reducer;
