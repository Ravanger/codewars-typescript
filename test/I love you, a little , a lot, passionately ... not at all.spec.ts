import { assert } from "chai"
import { howMuchILoveYou } from "../src/I love you, a little , a lot, passionately ... not at all"

describe("I love you, a little , a lot, passionately ... not at all", function () {
  it("Basic tests", function () {
    assert.equal(
      howMuchILoveYou(7),
      "I love you",
      "Number of petals can be higher than 6"
    )
    assert.equal(howMuchILoveYou(3), "a lot")
    assert.equal(howMuchILoveYou(6), "not at all")
  })
})
