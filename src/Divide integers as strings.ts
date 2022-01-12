// https://www.codewars.com/kata/58dea43ff98a7e2124000169

// Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder] (vector<string> {quotient, remainder} in C++).

// a and b can be very large (at the order of 10^150 to 10^200)
// As usual, your result should not have leading 0s
// require is disabled in JavaScript. Do it yourself ;-)

function longDivision(number: string, divisor: string) {
  let quotient = ""
  let remainder = ""
  let index = 0

  return [quotient, remainder]
}

export function divideStrings(a: string, b: string) {
  const ret = longDivision(a, b)
  console.log(ret)

  return ret
}
