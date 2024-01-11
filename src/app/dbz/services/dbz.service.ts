import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/chracter.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 600,
    },
  ];

  addCharacter(character: Character): void {
    // otra opcion
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // };

    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
