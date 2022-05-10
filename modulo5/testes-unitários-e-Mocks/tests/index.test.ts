import { Character, performAttack, validateCharacter } from "../src";

// test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "",
//       life: 1500,
//       strength: 300,
//       defense: 500,
//     });

//     expect(result).toBe(false);
//   });

//   test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "scorpion",
//       life: 0,
//       strength: 300,
//       defense: 500,
//     });

//     expect(result).toBe(false);
//   });

//   test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "scorpion",
//       life: 1500,
//       strength: 0,
//       defense: 500,
//     });

//     expect(result).toBe(false);
//   });

//   test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "scorpion",
//       life: 1500,
//       strength: 300,
//       defense: 0,
//     });

//     expect(result).toBe(false);
//   });

//   test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "scorpion",
//       life: -1500,
//       strength: 300,
//       defense: 500,
//     });

//     expect(result).toBe(false);
//   });

//   test("Should return false for empty name", () => {
//     const result = validateCharacter({
//       name: "scorpion",
//       life: 1500,
//       strength: 300,
//       defense: 500,
//     });

//     expect(result).toBe(false);
//   });


test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});

test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
});

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
	});
});

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
