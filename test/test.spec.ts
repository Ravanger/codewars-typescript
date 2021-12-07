import { assert } from "chai"
import { Kata } from "../src/Disemvowel Trolls"

describe("disemvowel", function () {
  it("should pass a sample test", function () {
    assert.strictEqual(
      Kata.disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!"
    )
  })
})
