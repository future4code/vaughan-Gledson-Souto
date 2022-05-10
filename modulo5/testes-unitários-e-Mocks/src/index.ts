export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}


export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined || 
        input.strength === undefined ||
        input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
};

// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };
  export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
};

// c) com a injeção de dependencia, faz com que a função não fique dependente
// de um valor definido, agora os valores podem vim pelo parametro da funcao


// Exercicio 4
// a) para o validate pois no perform ele pegar infos do character, então os dado precisam ser validados antes de ser passados
