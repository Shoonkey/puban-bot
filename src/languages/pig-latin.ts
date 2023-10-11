import {
  WORD_REGEX,
  isCapitalized,
  capitalizeStr,
  uncapitalizeStr,
} from "../shared/util";

// Pig Latin suffix
const SUFFIX = "aye";

class PigLatin {
  static encrypt(str: string): string {
    const output = str.replace(WORD_REGEX, (match) => {
      const firstLetter = match[0];
      const remaining = match.substring(1);

      let newStr = "";

      if (remaining.length > 0) {
        newStr = isCapitalized(match) ? capitalizeStr(remaining) : remaining;
        newStr += firstLetter.toLowerCase();
      } else {
        newStr += firstLetter;
      }

      newStr += SUFFIX;
      return newStr;
    });

    return output;
  }

  static decrypt(str: string): string {
    const output = str.replace(WORD_REGEX, (match) => {
      const removedSuffixStr = match.substring(0, match.length - SUFFIX.length);

      const encryptedFirstLetter = removedSuffixStr[0];
      const decryptedFirstLetter =
        removedSuffixStr[removedSuffixStr.length - 1];
      const remaining = removedSuffixStr.substring(
        0,
        removedSuffixStr.length - 1
      );

      const isUppercase =
        encryptedFirstLetter === capitalizeStr(encryptedFirstLetter);

      let newStr = "";

      if (remaining.length > 0) {
        newStr = isUppercase
          ? capitalizeStr(decryptedFirstLetter)
          : decryptedFirstLetter;
        newStr += uncapitalizeStr(remaining);
      } else {
        newStr += decryptedFirstLetter;
      }

      return newStr;
    });

    return output;
  }
}

export default PigLatin;
