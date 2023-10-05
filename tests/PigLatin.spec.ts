import PigLatin from "../src/languages/pig-latin";

const mutations = [
  {
    base: "Me gustan los árboles",
    encrypted: "Emaye ustangaye oslaye rbolesáaye"
  },
  {
    base: "No hay problema",
    encrypted: "Onaye ayhaye roblemapaye" 
  },
  {
    base: "Gracias!",
    encrypted: "Raciasgaye!",
    todo: true
  }
];

describe("PigLatin", () => {
  describe("Encryption", () => {
    mutations.forEach(mutation => {
      if (mutation.todo)
        it.todo(`Encrypts ${mutation.base}`);
      else
        it(`Encrypts '${mutation.base}'`, () => {
          expect(PigLatin.encrypt(mutation.base)).toBe(mutation.encrypted);
        });
    });
  });

  describe("Decryption", () => {
    mutations.forEach(mutation => {
      if (mutation.todo)
        it.todo(`Decrypts ${mutation.base}`);
      else
        it(`Decrypts '${mutation.encrypted}'`, () => {
          expect(PigLatin.decrypt(mutation.encrypted)).toBe(mutation.base);
        });
    });
  });
});