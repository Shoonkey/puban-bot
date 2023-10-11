import {
  WORD_REGEX,
  capitalizeStr,
  isCapitalized,
  uncapitalizeStr,
} from "../shared/util";

const DIACRITICS = "áéíóúü";
const VOWELS = `aeiou${DIACRITICS}`;

const REGEXES = {
  WORD_REGEX,
  LEADING_Y: /^(y+)/i,
  VOWEL_GROUPS: new RegExp(`(y*[${VOWELS}]+y*)+`, "gi"),
  ISOLATED_Y_VOWELS: new RegExp(`(?<=[^${VOWELS}])(y)(?=[^${VOWELS}])`, "gi"),
  UB_REGEX: /(ub)(?!ub)/gi,
};

/**
 * ENCRYPTION -------------------------------------------------------------------------------
 * TASK: Add "ub" before groups of vowels, matching casing of the first of the group.
 *
 * ENCRYPTION - Y VOWEL DETECTION
 * This process considers vowels "aeiou" and its Spanish diacritics "áéíóúü". It attempts to
 * take into account vowel Ys, as per the following rules:
 * 1. Y is a vowel if it's between one or two consonants (e.g "gym", "my", "deny", "bicycle")
 * 2. Y is a vowel if it has neighbor normal vowels (e.g. "eye", "dye", "buy", "buoyancy")
 * 3. Y is a consonant if it's at the beginning of a word
 *
 * ENCRYPTION - STEPS
 * Given these rules, encryption is in 3 steps:
 * 1. It removes Ys at the beginning to readd them later, so they're not matched
 * by the step 2.
 * 2. It adds "ub" to groups of vowels (including neighboring Ys), matching their casing
 * (if the group starts with a capital letter, "UB" goes before it, else "ub").
 * 3. It adds "ub" or "UB" to isolated Ys that act as vowels.
 *
 *
 * DECRYPTION --------------------------------------------------------------------------------
 * Task: Remove UBs followed by vowels, except the ub's that were in the original,
 * unencrypted string (and therefore form "ubub" in the encrypted version)
 * */

class UbbiDubbi {
  // Replace groups of vowels with ub + vowels
  // More details on how it works at the top comment.
  static encrypt(str: string): string {
    return str.replace(REGEXES.WORD_REGEX, (fullWordMatch) => {
      const leadingYMatch = fullWordMatch.match(REGEXES.LEADING_Y);

      const addUbMatchingCase = (match) => {
        return `${isCapitalized(match) ? "UB" : "ub"}${match}`;
      };

      const encryptableMatch = leadingYMatch
        ? fullWordMatch.substring(leadingYMatch[0].length)
        : uncapitalizeStr(fullWordMatch);

      const output = encryptableMatch
        .replace(REGEXES.VOWEL_GROUPS, addUbMatchingCase)
        .replace(REGEXES.ISOLATED_Y_VOWELS, addUbMatchingCase);

      let finalString = "";

      if (leadingYMatch) {
        finalString += leadingYMatch[0];
        finalString += output;
      } else {
        finalString += isCapitalized(fullWordMatch)
          ? capitalizeStr(output)
          : output;
      }


      return finalString;
    });
  }

  // Remove all ub's followed by vowels
  // More details on how it works on the top comment
  static decrypt(str: string): string {
    return str.replace(REGEXES.WORD_REGEX, (match) => {
      const uncapitalizedMatch = uncapitalizeStr(match);

      const output = uncapitalizedMatch.replace(REGEXES.UB_REGEX, "");

      return isCapitalized(match) ? capitalizeStr(output) : output;
    });
  }
}

export default UbbiDubbi;
