import { assert } from "chai"
import { finalGrade } from "../src/Student's Final Grade"

describe("Student's Final Grade", () => {
  it("Fixed tests", () => {
    assert.strictEqual(finalGrade(100, 12), 100)
    assert.strictEqual(finalGrade(85, 5), 90)
  })
})
