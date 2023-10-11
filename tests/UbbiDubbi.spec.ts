import UbbiDubbi from "../src/languages/ubbi-dubbi";
import Mutation from "./util/Mutation";
import testLanguage from "./util/testLanguage";

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
    encrypted: "Yubellubow"
  },
  {
    base: "Eye",
    encrypted: "Ubeye"
  },
  {
    base: "Larynx",
    encrypted: "Lubarubynx"
  }
];

testLanguage("UbbiDubbi", UbbiDubbi, mutations);