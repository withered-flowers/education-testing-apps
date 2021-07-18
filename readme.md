## Table of Content
1. [Why Testing](#why-testing)
1. [Type of Testing](#type-of-testing)
1. [Test Driven Development](#test-driven-development)
    * [Red Green Refactor](#red-green-refactor)
1. [Tools](#tools)
    * [Jest](#jest)
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

## References
- https://softwaretestingfundamentals.com/system-testing/
- https://www.codecademy.com/articles/tdd-red-green-refactor
- https://jestjs.io/
- https://jestjs.io/docs/using-matchers