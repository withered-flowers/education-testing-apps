## Table of Content
1. [Why Testing](#why-testing)
1. [Type of Testing](#type-of-testing)
1. [Test Driven Development](#test-driven-development)
    * [Red Green Refactor](#red-green-refactor)
1. [Tools](#tools)
    * [Jest](#jest)
    * [Supertest](#supertest)
1. [Demo](#demo)
    * [POST /register success case](#post-register-success-case)
    * [POST /register error case](#post-register-error-case)
    * [GET /product success case](#get-product-success-case)
1. [References](#references)

## Requirements
- instalasi nodejs
- mengerti dasar express
- mengerti dasar sequelize

## Why Testing
Dalam pengembangan aplikasi tidak bisa hanya mengandalkan coding coding coding saja lalu tiba tiba  
aplikasi jadi langsung dari otak seorang developer.

Harus dimulai dari mengetahui requirement dari aplikasinya dulu, kemudian memastikan dulu apa   
hasil yang diinginkan, baru memulai pembuatan aplikasinya.

Nah untuk memastikan apa hasil yang diinginkan tersebut, dibutuhkanlah testing dalam lebih   
memastikan apakah aplikasi yang dibuat akan sesuai atau tidak.

Mengapa testing?

- Menghindari regresi.  
```
Seorang dev sedang membuat fitur register dalam sebuah aplikasi, kemudian setelah dev sudah   
membuat codenya, si dev masuk ke fitur selanjutnya, misalnya login. Pada saat masuk ke fitur login  
ternyata si dev menyadari ada yang kurang tepat pada fitur register tersebut, sehingga kembali  
mengerjakan fitur register.  

Dari contoh ini, terjadi kemunduran pengerjaan dari fitur login ke fitur register lagi.

Nah dengan menggunakan teknik testing ini, diharapkan kejadian ini tidak akan terjadi.
```

- "Pede" dalam refactoring
```
Dengan menggunakan testing, seorang dev bisa dengan lebih yakin memastikan komponen apa saja yang  
berulan dan bisa di-factoring

Karena kita sudah mengetahui requirement / harapan dari setiap fitur yang ada seperti apa via   
testing, seorang dev bisa lebih menganalisa pola kode yang diharapkan dan bisa membuat kode yang  
lebih efisien, karena tidak hanya meraba-raba kode saja.
```

- Dokumentasi Kode
```
Dengan menggunakan testing, seorang dev bisa lebih mengetahui output yang diharapkan dari tiap 
fitur yang ada, sehingga dapat dijadikan sebagai acuan dalam membuat dokumentasi kode yang tepat  
juga.
```

## Type of Testing
Testing ada banyak sekali macamnya, tapi yang akan dibahas di sini terbagi menjadi 4 bagian:
- Unit Testing (Testing per Function),   
    - Dikenal juga dengan nama Component Testing
    - Validasi tiap komponen berjalan sebagaimana mestinya
- Integration Testing (Testing per Module)
    - Komponen dikombinasikan menjadi grup, kemudian ditesting
    - Untuk memvalidasi interaksi antar unit / komponen yang digabung
    - Analogi => Pen ada bagian pena, bagian tutup, bagian badan, bagian penutup. dibuat terpisah.  
      kemudian akan dilakukan tes, pena sama badan oke? badang sama tutup oke? dst
- E2E Testing 
    - Testing dengan menerapkan gerakan layaknya user, mis: login kalau berhasil apa yang akan  
      terjadi? perubahannya di html-nya gimana?

Selain itu ada juga UAT (User Acceptance Testing). Analogi: Open Beta di Game, atau, minta teman  
untuk jalanin aplikasinya kita. Hasilnya dalam bentuk skala likert

## Test Driven Development
Metode dalam menggunakan testing ada banyak, tapi yang akan dicoba dipelajari kali ini adalah  
Test Driven Development (TDD): Pendekatan dalam pembuatan aplikasi, dimana kita akan membuat  
test terlebih dahulu sebelum membuat aplikasi, kemudian akan menggunakan test tersebut dalam  
mengembangkan aplikasi yang akan dibuat.

Salah satu pendekatan dalam TDD adalah Red Green Refactor.

### Red Green Refactor

**Mantra** *Red*, *Green*, *Refactor* membantu developer dalam mengelompokkan fokus dalam 3 fase:
- Red - Pikirkan apa yang ingin dikembangkan dalam bentuk testnya  
  (e.g.: Ingin endpoint register mengembalikan value xxx dan yyy)  
  Di tahap ini, pasti akan muncul banyak error, karena belum dibuatkan kodenya
- Green - Pikirkan bagaimana bisa lulus dari test yang dibuat sebelumnya  
  Di tahap ini, harus membuat kode dan membuat test jadi hijau (pass)
- Refactor - Pikirkan bagaimana membuat kode lebih efisien  
  Di tahap ini, dev harus memikirkan membuat kode yang lebih efisien / tidak berulang.

![red-green-refactor](/assets/red-green-refactor-tdd.png)

Ingat bahwa TDD itu bukan test yang membuktikan kode kita jalan atau tidak, tapi lebih ke cara  
berpikir dan cara *ngoding*.

## Tools
Yuk sudahan teorinya, mari kita demo.

### Jest
Jest merupakan testing framework pada javascript yang populer dan banyak digunakan.

Cara pasangnya dengan menggunakan npm:  
`npm install --save-dev jest`

Contoh Cerita Test:
- Developer diminta untuk membuat sebuah aplikasi yang bisa menjumlahkan dua buah angka yang  
  diberikan.

Cara membuat dengan Jest:
1. npm init project
2. npm install --save-dev jest
3. Buat folder `tests` dan file dengan nama <nama>.test.js
4. Buat expected result nya terlebih dahulu dari cerita di atas.
```javascript
// Test fungsi sum 100 + 200 sama dengan 300
test("sum 100 and 200 to be 300", () => {
  // Ekspektasi:
  // fungsi bernama pertama
  // menerima 2 parameter
  // menghasilkan 300
  expect(pertama(100, 200)).toBe(300);
});
```
5. Menambahkan script untuk testing pada `package.json`
```json
  "scripts": {
    "test": "jest"
  },
```
6. Jalankan test dengan `npm run test`
7. Lihat hasilnya, dan tentu saja ... **FAIL** bukan? hal ini terjadi karena kita hanya membuat  
   testnya saja, namun belum membuat fungsinya
8. Buat file `pertama.js`, dan masukkan kode berikut
```javascript
const pertama = (a, b) => {
  return a + b;
}

module.exports = pertama;
```
9. Modifikasi kode `tests/pertama.test.js`
```javascript
const pertama = require("../pertama.js");

// Test fungsi sum 100 + 200 sama dengan 300
test("sum 100 and 200 to be 300", () => {
  // Ekspektasi:
  // fungsi bernama pertama
  // menerima 2 parameter
  // menghasilkan 300
  expect(pertama(100, 200)).toBe(300);
});
```
10. Jalankan ulang kode tersebut dengan `npm run test` dan hasilnya sudah akan **PASS**

Selamat, sampai di titik ini kita sudah berhasil menggunakan Jest dengan baik !

Selanjutnya bisa coba lihat dari dokumentasi jest tentang `common matchers` apa saja yang ada dan  
bisa digunakan untuk melakukan pengecekan testingnya yah !

Dari contoh yang sudah dicoba di atas, kita bisa melakukan testing berdasarkan fungsi fungsi yang  
akan dibuat nantinya, tapi bagaimana kalau yang ingin kita test adalah API Endpoint kita yang   
asli? Apakah bisa dengan menggunakan `jest` saja?

Tentu *tydaque*, oleh karena itu, kita membutuhkan sebuah package lainnya yang bernama `supertest`.

### Supertest
Supertest merupakan sebuah package yang digunakan untuk melakuan testing terhadap API Endpoint  
yang sudah dibuat secara langsung.

cara instalasinya pun menggunakan npm: `npm install --save-dev supertest`

Disclaimer:  
Case ini sebagai contoh sudah dipendekkan dalam bentuk dokumentasi API, pada realnya,  
case ini umumnya akan diberikan dalam bentuk requirement user / story board saja

## Demo

### POST /register success case
Misalnya sekarang kita memiliki case untuk membuat API yang dokumentasinya sudah diberikan   
sebagai berikut:

```json
POST /register

Request
- username: String
- password: String

Response
201 Created
{
  "code": 201,
  "data": "success create user",
  "user_id": Integer
}
````

Sekarang kita akan membuat testnya, dengan langkah langkah sebagai berikut:
1. Membuat file `tests/user.test.js`
2. Modifikasi file `user.test.js` menjadi seperti berikut
```javascript
const request = require("supertest");
// misalnya kita sudah pasti bahwa akan menggunakan express dan file utama
// bernama app.js
const app = require("../app.js");

// Kita buat dulu data yang akan dikirimkan
let userTestData = { username: "testing", password: "testing" };

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
```
3. Coba untuk menjalankan testing di atas, maka akan terjadi "red" / **FAIL** terlebih dahulu,  
   karena file dan kode pada `app.js` belum dibuat.
4. Saatnya membuat kode ! 
5. instalasi package berikut `express sequelize pg jsonwebtoken bcrypt sequelize-cli` dengan:  
   - `npm i express sequelize pg jsonwebtoken bcrypt`
   - `npm i -D sequelize-cli nodemon`
6. Inisialisasi sequelize dengan `npx sequelize init`
7. Konfigurasi file `config/config.json` pada database **TESTING** dan **DEVELOPMENT**
8. Membuat model User dengan   
   `npx sequelize model:create --name User --attributes username:string,password:string`
9. Pada `models/user.js`, modifikasi kode dengan menambahakan hooks beforeCreate
```javascript
  // tambahkan sebelum return User;
  const bcrypt = require("bcrypt");

  User.beforeCreate((instance, options) => {
    instance.password = bcrypt.hashSync(instance.password, 10);
  });
```
10. Modifikasi file `app.js` menjadi seperti berikut
```javascript
// create an express app
const express = require("express");
const app = express();

const { User } = require("./models/index");

const port = process.env.PORT || 10000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// POST /register
app.use("/register", (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then((user) => {
      res.status(201).json({
        code: 201,
        data: "success create user",
        user_id: user.id,
      });
    })
    .catch((err) => {
      res.status(400);
    });
});

app.listen(port, () => {
  console.log("App listening on port", port);
});

// supaya bisa terbaca oleh test maka app harus diexport
module.exports = app;
```
11. Jalankan test dengan menggunakan `npm run test`
12. Pada saat hasilnya keluar dengan status **PASS**, namun akan muncul warning pada jest bahwa  
    jest mengalami force exit karena *improper teardown*, untuk mengatasi hal ini, modifikasi  
    script `test` pada file `package.json`
```json
  "scripts": {
    "test": "jest --detectOpenHandles"
  },
```
13. Setelah menjalankan ulang `npm run test`, akan terlihat bahwa kesalahan terjadi pada   
    `app.listen` di aplikasi express yang sudah dibuat. Pada saat membuat testing ini seharusnya  
    `listen` tidak terpanggil, sehingga solusinya adalah memisahkan `listen` dari `app.js`.
14. Buat folder baru dengan nama `bin` dan file bernama `www`
15. Pada file `app.js` hapus bagian `app.listen`
16. Pada file `bin/www` tambahkan kode sebagai berikut
```javascript
const app = require("../app.js");
const port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log("App listening on port", port);
});
```
17. Tambahkan juga script `dev` pada `package.json`
```json
  "scripts": {
    "test": "jest --detectOpenHandles",
    "dev": "npx nodemon bin/www"
  },
```
18. Sekarang apabila kita melihat isi dari databasenya tentunya, data pada saat testing masih ada  
    bukan? Sekarang bagaimana caranya bila kita ingin, setelah melakukan pengetesan, data yang  
    sudah ditambahkan barusan ini dihapus?

    Maka kita bisa menggunakan jest `afterAll`
19. Modifikasi kode `tests/user.test.js` lagi untuk penggunaan `afterAll`
```javascript

// Jangan lupa import sequelize Model User
const { User } = require("../models/index.js");

// Kita akan menambahkan kode untuk menghapus isi dari tabel User setelah
// semua testing berhasil dijalankan
afterAll((done) => {
  User.destroy({ truncate: true })
    .then((_) => done())
    .catch((err) => done(err));
});
```
20. Kemudian apabila pada saat test tidak ingin melihat adanya log dari sequelize, bisa   
    menambahkan options `logging: false` pada file `config/config.json`
21. Sampai dengan tahap ini kita sudah berhasil membuat test case untuk success register, YAY !!!
    
### POST /register error case
Namun bagaimanakah bila kita ingin membuat error casenya juga? mis: terjadi error format email  
atau tidak menginput password, dan sebagainya?

```json
POST /register

Request
- username: String
- password: String, required

Response
400 Bad Request
{
  "code": 400,
  "msg": "Bad Request"
}
```

1. Mari kita modifikasi code pada `tests/user.tests.js`
```javascript
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
```
2. Jalankan dengan `npm run test` lagi dan lihatlah hasilnya !

   Kalau misalnya ingin melakukan test terhadap validasi error yang digenerate oleh Sequelize,  
   Bagaimanakah caranya? sama dengan hal yang ada di atas, hanya saja menggunakan ekspektasi  
   berupa array yah !

3. Apabila file testingnya sudah banyak, dan nantinya ingin dijalankan secara serial satu per  
   satu, bisa menggunakan option --runInBand pada script test yang ada di file `package.json` yah !

### GET /product success case

Kemudian misalnya kita ingin membuat test lagi terhadap requirement untuk bisa melakukan fetch  
data pada suatu endpoint namun ada tahapan yang harus dilakukan terlebih dahulu, misalnya ada
authentikasi di depannya, bagaimanakah caranya dengan menggunakan jest dan supertest ini?

Hint: bisa menggunakan beforeAll

Demo untuk GET /product success case ini bersifat partial !

1. Buatlah sebuah file `tests/product.test.js` dan modifikasi kode menjadi seperti berikut
```javascript
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
```

Sekian untuk pembelajaran test di kali ini, happy testing !

## References
- https://softwaretestingfundamentals.com/system-testing/
- https://www.codecademy.com/articles/tdd-red-green-refactor
- https://jestjs.io/
- https://jestjs.io/docs/using-matchers