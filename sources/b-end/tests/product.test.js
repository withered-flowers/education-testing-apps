const supertest = require("supertest");
const app = require("../app.js");

// ceritanya kita ingin menggunakan JWT
const jwt = require("jsonwebtoken");

// Siapkan access_tokoenya dari User
const { User } = require("./models/index");

// Buat user data terlebih dahulu
const userData = {
  username: "standard",
  password: "standard",
};

let accessToken = "";

// ceritanya sebelum buat test
// Akan membuat user dulu dan mendapatkan access_tokennya
beforeAll((done) => {
  User.create(userDate)
    .then((user) => {
      const payload = {
        id: user.id,
        username: user.username,
      };

      accessToken = jwt.sign(payload, "secret");
      done();
    })
    .catch((err) => done(err));
});

// jangan lupa delete user setelah selesai
afterAll((done) => {
  User.destroy({ truncate: true })
    .then((_) => {
      done();
    })
    .catch((err) => done(err));
});

// Barulah membuat test casenya
// ...
describe("...", () => {
  test("...", (done) => {});
});
