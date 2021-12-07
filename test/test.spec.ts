import { assert } from "chai"
import { Kata } from "../src/Square Every Digit"

describe("squareDigits", function () {
  it("should pass a sample test", function () {
    assert.strictEqual(Kata.squareDigits(9119), 811181)
    assert.strictEqual(Kata.squareDigits(0), 0)
  })
})
