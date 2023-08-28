import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//Reducers
import charactersReducer from "./characters";

export function makeStore() {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
