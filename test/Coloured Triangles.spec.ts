import { assert } from "chai"
import { triangle } from "../src/Coloured Triangles"

describe("Coloured Triangles", () => {
  it("Test", () => {
    assert.strictEqual(triangle("GB"), "R")
    assert.strictEqual(triangle("RRR"), "R")
    assert.strictEqual(triangle("RGBG"), "B")
    assert.strictEqual(triangle("RBRGBRB"), "G")
    assert.strictEqual(triangle("RBRGBRBGGRRRBGBBBGG"), "G")
    assert.strictEqual(triangle("B"), "B")
  })
})
