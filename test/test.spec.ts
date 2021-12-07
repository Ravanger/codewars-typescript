import { assert } from "chai"
import { spinWords } from "../src/Stop gninnipS My sdroW!"

describe("spinWords", () => {
  it("should pass some fixed tests", () => {
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")
  })
})
