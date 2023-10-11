import PigLatin from "../src/languages/pig-latin";
import Mutation from "./util/Mutation";
import testLanguage from "./util/testLanguage";

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
    encrypted: "ULLCAPSFAYE"
  }
];

testLanguage("PigLatin", PigLatin, mutations);