// https://www.codewars.com/kata/514a6336889283a3d2000001

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

export const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter((num) => num % 2 === 0)
}
