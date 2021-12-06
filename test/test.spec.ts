import { assert } from "chai"
import { even_or_odd } from "../src/Even or Odd"

describe("solution", function () {
  it("basicTests", function () {
    assert.equal(even_or_odd(2), "Even")
    assert.equal(even_or_odd(0), "Even")
    assert.equal(even_or_odd(7), "Odd")
    assert.equal(even_or_odd(1), "Odd")
  })
})
