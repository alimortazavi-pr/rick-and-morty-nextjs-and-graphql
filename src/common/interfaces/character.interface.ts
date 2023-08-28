export interface ICharacterState {
  characters: ICharacter[];
}

export interface ICharacter {
  id: string;
  name: string;
  status: string;
  species: string;
}
