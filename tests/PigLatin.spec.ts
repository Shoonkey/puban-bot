import PigLatin from "../src/languages/pig-latin";
import Mutation from "./util/Mutation";

const mutations: Mutation[] = [
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
    encrypted: "Raciasgaye!"
  },
  {
    base: "I",
    encrypted: "Iaye"
  },
  {
    base: "i",
    encrypted: "iaye"
  },
  {
    base: "FULLCAPS",
    encrypted: "ULLCAPSFAYE",
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