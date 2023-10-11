// Regex for capturing words
export const WORD_REGEX = /[a-záéíóúü]+/gi;

export function capitalizeStr(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

export function uncapitalizeStr(str: string): string {
  return str[0].toLowerCase() + str.substring(1);
}

export function isCapitalized(str: string) {
  const isFirstLetterUppercase = str[0] === capitalizeStr(str[0]);

  if (str.length === 1)
    return isFirstLetterUppercase;

  const isNextLetterLowercase = str[1] === str[1].toLowerCase();
  return isFirstLetterUppercase && isNextLetterLowercase;
}
