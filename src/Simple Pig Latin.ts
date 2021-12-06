// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export const pigIt = (a: string): string => {
  return a
    .split(/\s/u)
    .map((word) =>
      !word || word.match(/^[.,:!?]/u)
        ? word || ""
        : `${word.slice(1)}${word[0]}ay`
    )
    .join(" ")
}
