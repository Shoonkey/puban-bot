import UbbiDubbi from "../src/languages/ubbi-dubbi";
import Mutation from "./util/Mutation";

const mutations: Mutation[] = [
  {
    base: "Me gustan los árboles",
    encrypted: "Mube gubustuban lubos ubárbubolubes"
  },
  {
    base: "No hay problema",
    encrypted: "Nubo hubay pruboblubemuba"
  },
  {
    base: "Gracias!",
    encrypted: "Grubacubias!"
  },
  {
    base: "I",
    encrypted: "Ubi"
  },
  {
    base: "Yellow",
    encrypted: "Yubellubow",
    todo: true
  },
  {
    base: "Eye",
    encrypted: "Ubeye",
    todo: true
  },
  {
    base: "Larynx",
    encrypted: "Lubarubynx",
    todo: true
  }
];

describe("UbbiDubbi", () => {
  describe("Encryption", () => {
    mutations.forEach(mutation => {
      if (mutation.todo)
        it.todo(`Encrypts ${mutation.base}`);
      else
        it(`Encrypts '${mutation.base}'`, () => {
          expect(UbbiDubbi.encrypt(mutation.base)).toBe(mutation.encrypted);
        });
    });
  });

  describe("Decryption", () => {
    mutations.forEach(mutation => {
      if (mutation.todo)
        it.todo(`Decrypts ${mutation.base}`);
      else
        it(`Decrypts '${mutation.encrypted}'`, () => {
          expect(UbbiDubbi.decrypt(mutation.encrypted)).toBe(mutation.base);
        });
    });
  });
});