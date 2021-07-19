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
- "Pede" dalam refactoring
- Dokumentasi Kode

## Type of Testing
Testing ada banyak sekali macamnya, tapi yang akan dibahas di sini terbagi menjadi 4 bagian:
- Unit Testing (Testing per Function),   
- Integration Testing (Testing per Module)
- E2E Testing 

Selain itu ada juga UAT (User Acceptance Testing)

## Test Driven Development
Metode dalam menggunakan testing ada banyak, tapi yang akan dicoba dipelajari kali ini adalah  
Test Driven Development (TDD)

Salah satu pendekatan dalam TDD adalah Red Green Refactor.

### Red Green Refactor

**Mantra** *Red*, *Green*, *Refactor* membantu developer dalam mengelompokkan fokus dalam 3 fase:
- Red
- Green
- Refactor

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

### GET /product success case

Kemudian misalnya kita ingin membuat test lagi terhadap requirement untuk bisa melakukan fetch  
data pada suatu endpoint namun ada tahapan yang harus dilakukan terlebih dahulu, misalnya ada
authentikasi di depannya, bagaimanakah caranya dengan menggunakan jest dan supertest ini?

Hint: bisa menggunakan beforeAll

Demo untuk GET /product success case ini bersifat partial !

## References
- https://softwaretestingfundamentals.com/system-testing/
- https://www.codecademy.com/articles/tdd-red-green-refactor
- https://jestjs.io/
- https://jestjs.io/docs/using-matchers