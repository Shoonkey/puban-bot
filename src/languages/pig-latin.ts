import {
  WORD_REGEX,
  isCapitalized,
  capitalizeStr,
  uncapitalizeStr,
  isFullCaps,
  isUppercaseSentence,
} from "../shared/util";

// Pig Latin suffix
const SUFFIX = "aye";

class PigLatin {
  static encrypt(str: string): string {
    const uppercaseSentenceFlag = isUppercaseSentence(str);

    const output = str.replace(WORD_REGEX, (match) => {
      const firstLetter = match[0];
      const remaining = match.substring(1);

      let newStr = "";

      if (remaining.length > 0) {
        newStr = isCapitalized(match) ? capitalizeStr(remaining) : remaining;
        newStr += isFullCaps(match) ? firstLetter : firstLetter.toLowerCase();
      } else {
        newStr += firstLetter;
      }

      if (
        uppercaseSentenceFlag ||
        (match.length > 1 && isFullCaps(match))
      )
        newStr += SUFFIX.toUpperCase();
      else
        newStr += SUFFIX;
      
      return newStr;
    });

    return output;
  }

  static decrypt(str: string): string {
    const output = str.replace(WORD_REGEX, (match) => {
      const removedSuffixStr = match.substring(0, match.length - SUFFIX.length);
      const suffixInStr = match.substring(removedSuffixStr.length);

      const encryptedFirstLetter = removedSuffixStr[0];
      const decryptedFirstLetter =
        removedSuffixStr[removedSuffixStr.length - 1];
      
      const remaining = removedSuffixStr.substring(
        0,
        removedSuffixStr.length - 1
      );

      const isUppercase = isCapitalized(encryptedFirstLetter);

      let newStr = "";

      if (remaining.length > 0) {
        newStr = isUppercase
          ? capitalizeStr(decryptedFirstLetter)
          : decryptedFirstLetter;
        newStr += isFullCaps(suffixInStr) ? remaining : uncapitalizeStr(remaining);
      } else {
        newStr += decryptedFirstLetter;
      }

      return newStr;
    });

    return output;
  }
}

export default PigLatin;
