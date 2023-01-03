// ПРОЧИТАТЬ: https://learn.javascript.ru/json

/**
 * JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов.
 * 
 * JSON поддерживает следующие типы данных:
 *  - Объекты { ... }
 *  - Массивы [ ... ]
 *  - Примитивы:
 *      - строки,
 *      - числа,
 *      - логические значения true/false,
 *      - null.
 */
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
  
let json = JSON.stringify(student); // JSON.stringify() для преобразования объектов в JSON
console.log(json);  // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

console.log(typeof json); // string

json = JSON.stringify(student, null, 2);   // Файл json с форматированием
console.log(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": [
    "html",
    "css",
    "js"
  ],
  "wife": null
}
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let obj = JSON.parse(json); // JSON.parse() для преобразования JSON обратно в объект

console.log("\n", typeof obj);  // object
console.log(
    obj, "\n",      // {name: 'John', age: 30, isAdmin: false, courses: Array(3), wife: null}
    obj["name"],    // John
    obj["age"],     // 30
    obj.courses[0], // "html". Для вложенных объектов
);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

try {
    console.log( meetup.date.getDate() ); // Ошибка!
} catch (error) {
    // Значением meetup.date является строка, а не Date объект.
    console.log("Ошибка! " + error);
};

meetup = JSON.parse(str, function(key, value) {
  if (key == 'date')
    return new Date(value);
  return value;
});

console.log( meetup.date.getDate() ); // 30 - теперь работает!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~