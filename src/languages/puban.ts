import PigLatin from "./pig-latin";
import UbbiDubbi from "./ubbi-dubbi";

class Puban {
  static encrypt(str: string): string {
    return PigLatin.encrypt(UbbiDubbi.encrypt(str));
  }

  static decrypt(str: string): string {
    return UbbiDubbi.decrypt(PigLatin.decrypt(str));
  }
 }

export default Puban;