const ADD_UB_TO = "aeiouyáéíóúü";

class UbbiDubbi {
  // Replace lower and uppercase vowels with ub + vowels
  static encrypt(str: string): string {
    const regexLower = new RegExp(`([${ADD_UB_TO}]+)`, "g");
    const regexUpper = new RegExp(`([${ADD_UB_TO.toUpperCase()}]+)`, "g");
    
    const output = str.replace(regexLower, "ub$&").replace(regexUpper, "UB$&");
    return output;
  }

  // Remove all ub's followed by vowels, except the ub's that were in the
  // original, pre-encryption string (and therefore form "ubub"
  // in the encrypted string)
  static decrypt(str: string): string {
    const captureUbRegex = /(ub)(?!ub)/gi;

    const output = str.replace(captureUbRegex, "");
    return output;
  }
}

export default UbbiDubbi;
