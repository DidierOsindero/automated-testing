const findShortestString = require("./find-shortest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["cool", "not cool"])).toBe("cool");
  expect(findShortestString(["short", "longer", "longap"])).toBe("short");
});
