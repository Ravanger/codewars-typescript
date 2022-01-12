import { assert } from "chai"
import { divideStrings } from "../src/Divide integers as strings"

describe("Divide integers as strings", function () {
  function test(a: number, b: number) {
    assert.deepEqual(divideStrings(a.toString(), b.toString()), [
      Math.floor(a / b).toString(),
      (a % b).toString(),
    ])
  }

  it("tests", () => {
    test(0, 5)
    test(4, 5)
    test(10, 2)
    test(20, 3)
    test(60, 5)
    test(219, 11)
    test(729, 9)
    test(1000, 10)
    test(600001, 100)
  })
})
