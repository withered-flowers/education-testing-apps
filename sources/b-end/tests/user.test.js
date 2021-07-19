const request = require("supertest");
// misalnya kita sudah pasti bahwa akan menggunakan express dan file utama
// bernama app.js
const app = require("../app.js");

// Kita buat dulu data yang akan dikirimkan
let userTestData = { username: "testing", password: "testing" };

// Jangan lupa import sequelize Model User
const { User } = require("../models/index.js");

// Kita akan menambahkan kode untuk menghapus isi dari tabel User setelah
// semua testing berhasil dijalankan
afterAll((done) => {
  User.destroy({ truncate: true })
    .then((_) => done())
    .catch((err) => done(err));
});

// buat block untuk pengetesan / pengelompokkan dengan menggunakan
// describe dari jest
describe("POST /register [SUCCESS CASE]", () => {
  // harapannya apa dari test ini?
  // 1. ingin mengirimkan sebuah object yang memiliki:
  //    - username berupa string
  //    - password berupa string
  // 2. ingin mengembalikan sebuah object yang memiliki:
  //    - code berupa integer, value 201
  //    - data berupa string, value "success create user"
  //    - user_id berupa integer, value Integer apapun
  test("Should return an object with keys: code, data, and user_id" /* 
  Ingat parameter kedua adalah callbackFn
  */, (done) => {
    // Tambahkan parameter done untuk pengecekan async
    request(app)
      // Endpoint POST /register
      .post("/register")
      // Kirim data Object username dan password
      .send(userTestData)
      // kondisi apabila berhasil
      .then((response) => {
        // cek apakah status code 201
        expect(response.status).toBe(201);
        // cek apakah response body punya property namanya code value 201
        expect(response.body).toHaveProperty("code", 201);
        // cek apakah response body punya property namanya data value "success create user"
        expect(response.body).toHaveProperty("data", "success create user");
        // cek apakah response body punya property namanya user_id valuenya angka apapun itu
        expect(response.body).toHaveProperty("user_id", expect.any(Number));
        // cek apakah response body tidak punya property password
        expect(response.body).not.toHaveProperty("password");
        // test async selesai
        done();
      })
      .catch((err) => {
        // bila terjadi error
        done(err);
      });
  });
});

describe("POST /register [ERROR CASE]", () => {
  // harapan dari test ini
  // user salah input password kosong
  // response status 400
  // mengembalikan object yang memiliki:
  //   - code berupa integer, value 400
  //   - msg berupa string, value "Bad Request"
  test("Should return an object with keys: code and msg", (done) => {
    const invalidUserData = { ...userTestData, password: null };

    request(app)
      .post("/register")
      .send(invalidUserData)
      .then((response) => {
        // cek status code 400
        expect(response.status).toBe(400);
        // cek apakah response body punya property namanya code value 400
        expect(response.body).toHaveProperty("code", 400);
        // cek apakah response body punya property msg value "Bad Request"
        expect(response.body).toHaveProperty("msg", "Bad Request");
        done();
      })
      .catch((err) => done(err));
  });
});
