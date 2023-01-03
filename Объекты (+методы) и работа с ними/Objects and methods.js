// "use strict"

// Создание объекта. Вариации
let user1 = new Object();
let user2 = {};
let user3 = {     // объект
    name: "John",           // под ключом "name" хранится значение "John"
    age: 30,                // под ключом "age" хранится значение 30
    "likes birds": true,    // ключ из нескольких слов выделяется кавычками
};

console.log(user3["likes birds"]);  // обращение к ключу, состоящему из нескольких слов

console.log(user3);         // вывод объекта
console.log(user3.name);    // вывод свойства объекта

user3.isAdmin = true;   // добавляем новое свойство
console.log(user3);

delete user3.isAdmin;   // удаления свойства объекта
console.log(user3);

const user4 = {     // const распространяется только на переменную user4, а не на ключи и значения
    name: "Nico",
};
user4.name = "Bob";     // поэтому МОЖНО менять значения у ключей
user4.isAdmin = "Yes";  // и добавлять/удалять ключи
console.log(user4);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeUser(name, age) {  // Функция, создающая (и возвращающая) объект
    return { name, age };
};
  
let user = makeUser("Ann", 30);
console.log(user);

function User(name) {   // Функция-конструктор. Их задача – записать все необходимое в this
    this.name = name;
    this.isAdmin = false;
}
  
user = new User("Jack");
console.log(user);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// проверка наличия ключа у объекта
console.log("name" in user);    // true
console.log("isAdmin" in user, "\n"); // false

// перебор свойств объекта
for (let key in user3) {
    console.log(key);       // ключи
    console.log(user3[key]); // значения ключей
};
console.log("\n");
//~~~[Целочисленные свойства объекта]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let codes = {               // Целочисленные свойства объекта
    13: "Германия",
    11: "Швейцария",
    "12": "Великобритания",
    "1": "США"
};

// обращение к свойству объекта
console.log(codes[13]);     // Германия
console.log(codes["13"]);   // Германия
console.log("\n");

for (let code in codes) {   // Целочисленные свойства будут упорядоченными!!!!!
    console.log(code);      // 1, 11, 12, 13
};

codes = {                   // попытка избавиться от целочисленности
    "+13": "Германия",
    "+11": "Швейцария",
    "+12": "Великобритания",
    "+1": "США"
};
console.log("\n");

for (let code in codes) {
    console.log(+code);      // 13, 11, 12, 1
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
user = { name: "John" };    // Копирование объектов и ссылки
let admin = user;           // копируется ссылка на объект

console.log(user);
console.log(admin);
admin.name = "Nico";    // Изменим свойство у одного объекта - изменения будут и у 2го объекта
console.log(user);
console.log(admin);

user1 = { name: "John" };
user2 = { age: 30 };
dest =  { id: 01345 };

Object.assign(dest, user1, user2);  // объединяем user1, user2, user3 и другие объекты в один - dest
console.log(dest);

let clone = Object.assign( {}, dest);   // Альтернатива цикла for...in
console.log(clone);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
user = user1 = user2 = user3 = admin = {};    // очистка мусора
console.log(user,"\n");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
user = {
    name: "Nico",
    age: 20,
    sayHi() {   // метод объекта user
        console.log("Hi, " + this.name + "!");    // this здесь - ссылка на объект user
    },
};

user.sayHi();   // "Hi, Nico!"

function User1(name) {  // объект-конструктор User
    this.name = name;

    this.sayHello = function () {
        console.log("Hello, " + this.name + "!");
    };
};

user = new User1("Kolyan");
user.sayHello();            // "Hello, Kolyan!"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
user = { name: "Nicolay", age: 20 };

function sayHello() {
    return "Hello, " + this.name + "!";
};

user.foo = sayHello;         // добавим функцию sayHi в объект user (теперь это метод объекта)
console.log(user.foo());  // "Hello, Nicolay!"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
user = { name: "Nicolay", age: 20 };
user2 = {};

/** Опциональная цепочка
 *  1) Если user существует, то user?.age работает как user.age;
 *  2) Если user - null/undefined, то user?.age вернёт undefined.
 *  * переменная перед user должна быть объявлена!!!
 */
console.log(user?.age);     // сейчас 20...
console.log(user2?.age);    // undefined
delete user?.age;           // удаляет user.name если user существует
console.log(user?.age, "\n");     // ...теперь undefined
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.

let sym = Symbol("AAA");   // Символ sym с именем AAA

user = {
    name: "Вася",
    age: 20,
    [sym]: "a",        // символы в квадратных скобках
};

for (let key in user)       // цикл for...in игнорирует символы Symbol
    console.log( key );     // name age

// получаем символ по имени
let sym2 = Symbol.for("BBB");
console.log( sym2 );    // "Symbol(BBB)"

// получаем имя по символу
console.log( Symbol.keyFor(sym2) ); // BBB
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
user1 = { name: "Вася", age: 20 };
user2 = { name: "Nico", age: 22 };

let obj_sum = user1 + user2;
console.log( user1, user2, obj_sum );
console.log(typeof user1, typeof obj_sum);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~