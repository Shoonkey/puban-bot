import UbbiDubbi from "../src/languages/ubbi-dubbi";

const mutations = [
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
    encrypted: "Grubacubias!",
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