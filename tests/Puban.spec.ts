import Puban from "../src/languages/puban";

const mutations = [
  {
    base: "Me gustan los árboles",
    encrypted: "Ubemaye ubustubangaye uboslaye bárbubolubesuaye"
  },
  {
    base: "No hay problema",
    encrypted: "Ubonaye ubayhaye ruboblubemubapaye"
  },
  {
    base: "Gracias!",
    encrypted: "Rubacubiasgaye!",
    todo: true
  }
];

describe("Puban", () => {
  describe("Encryption", () => {
    mutations.forEach(mutation => {
      if (mutation.todo)
        it.todo(`Encrypts ${mutation.base}`);
      else
        it(`Encrypts '${mutation.base}'`, () => {
          expect(Puban.encrypt(mutation.base)).toBe(mutation.encrypted);
        });
    });
  });

  describe("Decryption", () => {
    mutations.forEach(mutation => {
      if (mutation.todo)
        it.todo(`Decrypts ${mutation.base}`);
      else
        it(`Decrypts '${mutation.encrypted}'`, () => {
          expect(Puban.decrypt(mutation.encrypted)).toBe(mutation.base);
        });
    });
  });
});