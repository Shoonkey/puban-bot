import Puban from "../src/languages/puban";
import Mutation from "./util/Mutation";
import testLanguage from "./util/testLanguage";

const mutations: Mutation[] = [
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
    encrypted: "Rubacubiasgaye!"
  },
  {
    base: "i",
    encrypted: "biuaye"
  },
  {
    base: "I",
    encrypted: "Biuaye"
  },
  {
    base: "YO ESTOY GRITANDO!!",
    encrypted: "UBOYAYE BESTUBOYUAYE RUBITUBANDUBOGAYE!!"
  }
];

testLanguage("Puban", Puban, mutations);