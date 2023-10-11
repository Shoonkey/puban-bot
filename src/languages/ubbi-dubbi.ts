import {
  WORD_REGEX,
  capitalizeStr,
  isCapitalized,
  uncapitalizeStr,
} from "../shared/util";

const ADD_UB_TO = "aeiouyáéíóúü";

class UbbiDubbi {
  // Replace lower and uppercase vowels with ub + vowels
  // It preserves initial casing if the word is capitalized
  // i.e "Agregar" -> "Ubagrubegubar"
  static encrypt(str: string): string {
    return str.replace(WORD_REGEX, (match) => {
      const regexLower = new RegExp(`([${ADD_UB_TO}]+)`, "g");
      const regexUpper = new RegExp(`([${ADD_UB_TO.toUpperCase()}]+)`, "g");

      const uncapitalizedMatch = uncapitalizeStr(match);

      const output = uncapitalizedMatch
        .replace(regexLower, "ub$&")
        .replace(regexUpper, "UB$&");

      return isCapitalized(match) ? capitalizeStr(output) : output;
    });
  }

  // Remove all ub's followed by vowels, except the ub's that were in the
  // original, pre-encryption string (and therefore form "ubub"
  // in the encrypted string)
  static decrypt(str: string): string {
    const captureUbRegex = /(ub)(?!ub)/gi;

    return str.replace(WORD_REGEX, match => {
      const uncapitalizedMatch = uncapitalizeStr(match);

      const output = uncapitalizedMatch
        .replace(captureUbRegex, "");

      return isCapitalized(match) ? capitalizeStr(output) : output;
    });
  }
}

export default UbbiDubbi;
