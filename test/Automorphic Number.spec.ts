import { assert } from "chai"
import { automorphic } from "../src/Automorphic Number"

describe("Automorphic Number", () => {
  it("Testing for 1", () => assert.strictEqual(automorphic(1), "Automorphic"))
  it("Testing for 3", () => assert.strictEqual(automorphic(3), "Not!!"))
  it("Testing for 6", () => assert.strictEqual(automorphic(6), "Automorphic"))
  it("Testing for 9", () => assert.strictEqual(automorphic(9), "Not!!"))
  it("Testing for 25", () => assert.strictEqual(automorphic(25), "Automorphic"))
  it("Testing for 53", () => assert.strictEqual(automorphic(53), "Not!!"))
  it("Testing for 76", () => assert.strictEqual(automorphic(76), "Automorphic"))
  it("Testing for 95", () => assert.strictEqual(automorphic(95), "Not!!"))
  it("Testing for 625", () =>
    assert.strictEqual(automorphic(625), "Automorphic"))
  it("Testing for 225", () => assert.strictEqual(automorphic(225), "Not!!"))
})
