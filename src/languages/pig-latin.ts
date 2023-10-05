// Pig Latin suffix
const SUFFIX = "aye";

// Regex for capturing words
const wordRegex = /\S+/gi;

function capitalizeStr(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

function uncapitalizeStr(str: string): string {
  return str[0].toLowerCase() + str.substring(1);
}

class PigLatin {
  static encrypt(str: string): string {
    const output = str.replace(wordRegex, (match) => {
      const firstLetter = match[0];
      const remaining = match.substring(1);

      let newStr = "";

      if (firstLetter === capitalizeStr(firstLetter))
        newStr = capitalizeStr(remaining);
      else newStr = remaining;

      newStr += firstLetter.toLowerCase();
      newStr += SUFFIX;
      return newStr;
    });

    return output;
  }

  static decrypt(str: string): string {
    const output = str.replace(wordRegex, (match) => {
      const removedSuffixStr = match.substring(0, match.length - SUFFIX.length);

      const encryptedFirstLetter = removedSuffixStr[0];
      const decryptedFirstLetter =
        removedSuffixStr[removedSuffixStr.length - 1];
      const remaining = removedSuffixStr.substring(
        0,
        removedSuffixStr.length - 1
      );

      let newStr = "";

      if (encryptedFirstLetter === capitalizeStr(encryptedFirstLetter))
        newStr = capitalizeStr(decryptedFirstLetter);
      else newStr = decryptedFirstLetter;

      newStr += uncapitalizeStr(remaining);
      return newStr;
    });

    return output;
  }
}

export default PigLatin;
