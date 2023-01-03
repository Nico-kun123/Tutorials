// ПРОЧИТАТЬ: https://learn.javascript.ru/map-set
/**
 * Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map
 *      позволяет использовать ключи любого типа.
 */

let map = new Map();            // создаёт коллекцию
console.log(typeof map, "\n");  // Object

// map.set(key, value) – записывает по ключу key значение value
map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// Вывод коллекции в консоль
console.log(map);       // {size: 3, 1 => str1, 1 => num1, true => bool1}

// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует
console.log(map.get(1));      // "num1"
console.log(map.get("1"));    // "str1"

// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false
console.log(map.has(1));    // true
console.log(map.has(2));    // false

// map.delete(key) – удаляет элемент по ключу key
map.delete(true);
console.log(map);   // {size: 2, 1 => str1, 1 => num1}

// map.size – возвращает текущее количество элементов
console.log(map.size);  // 2

// map.clear() – очищает коллекцию от всех элементов
map.clear();
console.log(map);   // {size: 0}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);                 // огурец, помидор, лук
};
  
  // перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    console.log(amount);                    // 500, 350, 50
};
  
  // перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {              // то же самое, что и recipeMap.entries()
    console.log(entry);                     // огурец, 500 (и так далее)
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Получить Map из Object

let obj = {
    name: "John",
    age: 30
};

let obj1 = Object.entries(obj);
console.log( obj1[0], obj1[1] );    // ['name', 'John'] ['age', 30]

// Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ].
// Это именно то, что нужно для создания Map
map = new Map( Object.entries(obj) );
console.log( map.get('name') );         // John
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Получить Object из Map

map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

// map.entries() возвращает итерируемый объект пар ключ/значение, как раз в
//  нужном формате для Object.fromEntries
obj = Object.fromEntries(map); // создаём обычный объект (*)

console.log(obj);           // {banana: 1, orange: 2, meat: 4}
console.log(obj.orange);    // 2
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где
//  каждое значение может появляться только один раз.

let set = new Set();    // создаёт Set

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let bob = {};

// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set); // {size: 3, {name: 'John'}, {name: 'Pete'}, {name: 'Mary'}}

// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false
console.log( set.has(john) );   // true
console.log( set.has(bob) );  // false

// set.size – возвращает количество элементов в множестве.
console.log(set.size);      // 3

// Перебор
for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
};

// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на
//  момент вызова, иначе false.
console.log (set.delete(john)); // true
console.log (set.delete(bob));  // false

// set.clear() – удаляет все имеющиеся значения.
set.clear();
console.log(set);   // {size: 0}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРОЧИТАТЬ: https://learn.javascript.ru/weakmap-weakset

// WeakMap – принципиально другая структура в этом аспекте.
// Она не предотвращает удаление объектов сборщиком мусора, когда эти объекты выступают в качестве ключей.

let weakMap = new WeakMap();
obj = {};

weakMap.set(obj, "ok"); // работает (объект в качестве ключа)
// если obj будет удалён, "ok" будет автоматически удалён тоже

try {
    // нельзя использовать строку в качестве ключа
    weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект
} catch (error) {
    console.log("У weakMap нельзя использовать строку в качестве ключа!");
};

/**
 * WeakMap не поддерживает перебор и методы keys(), values(), entries(), так что нет
 *  способа взять все ключи или значения из неё.
 * 
 * В WeakMap присутствуют только следующие методы:
 *      - weakMap.get(key)
 *      - weakMap.set(key, value)
 *      - weakMap.delete(key)
 *      - weakMap.has(key)
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Применение для кеширования

// 📁 cache.js
let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* вычисляем результат для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
john = { name: "John" };

let result1 = process(john);
console.log(result1);
let result2 = process(john);
console.log(result2);

// ...позже, когда объект больше не нужен:
obj = null;

// Нет возможности получить cache.size, так как это WeakMap,
// но он равен 0 или скоро будет равен 0
// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются