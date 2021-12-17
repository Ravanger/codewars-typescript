import { assert } from "chai"
import { Kata } from "../src/Disemvowel Trolls"

describe("Disemvowel Trolls", function () {
  it("should pass a sample test", function () {
    assert.strictEqual(
      Kata.disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!"
    )
  })
})
