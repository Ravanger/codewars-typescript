// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/

export function howMuchILoveYou(petals: number): string {
  if (petals <= 0) return ""

  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ]

  return phrases[(petals - 1) % phrases.length]
}
