const pertama = require("../pertama.js");

// Test fungsi sum 100 + 200 sama dengan 300
test("sum 100 and 200 to be 300", () => {
  // Ekspektasi:
  // fungsi bernama pertama
  // menerima 2 parameter
  // menghasilkan 300
  expect(pertama(100, 200)).toBe(300);
});
