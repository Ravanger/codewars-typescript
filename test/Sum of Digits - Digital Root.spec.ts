import { assert } from "chai"
import { digitalRoot } from "../src/Sum of Digits - Digital Root"

describe("Sum of Digits - Digital Root", () => {
  it("should work for fixed tests", () => {
    assert.equal(digitalRoot(16), 7)
    assert.equal(digitalRoot(456), 6)
  })
})
