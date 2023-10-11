import Mutation from "./Mutation";

interface ILanguage {
  encrypt: (str: string) => string;
  decrypt: (str: string) => string;
}

function testLanguage(languageName: string, Language: ILanguage, mutations: Mutation[]) {
  describe(languageName, () => {
    describe("Encryption", () => {
      mutations.forEach((mutation) => {
        const title = `Encrypts '${mutation.base}'`;
        const fn = () => expect(Language.encrypt(mutation.base)).toBe(mutation.encrypted);

        if (mutation.todo)
          it.todo(title);
        else if (mutation.only)
          it.only(title, fn);
        else
          it(title, fn);
      });
    });

    describe("Decryption", () => {
      mutations.forEach((mutation) => {
        const title = `Decrypts '${mutation.encrypted}'`;
        const fn = () => expect(Language.decrypt(mutation.encrypted)).toBe(mutation.base);

        if (mutation.todo)
          it.todo(title);
        else if (mutation.only)
          it.only(title, fn);
        else
          it(title, fn);
      });
    });
  });
}

export default testLanguage;