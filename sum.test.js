const sum = require("./sum")

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 11)).toBe(12)
  expect(sum(0,2)).toBe(2)
})