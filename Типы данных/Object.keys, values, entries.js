// ПРОЧИТАТЬ: https://learn.javascript.ru/keys-values-entries

/**
 * Для простых объектов доступны следующие методы:
 *      - Object.keys(obj) – возвращает массив ключей.
 *      - Object.values(obj) – возвращает массив значений.
 *      - Object.entries(obj) – возвращает массив пар [ключ, значение].
 */

let user = {
    name: "John",
    age: 30
};

console.log(
    Object.keys(user), "\n",        // ['name', 'age']
    Object.values(user), "\n",      // ['John', 30]
    Object.entries(user), "\n",     // [ ["name","John"], ["age",30] ]
);

// перебор значений
for (let value of Object.keys(user)) {
    console.log(value);       // name, затем age
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

// преобразовать в массив, затем map, затем fromEntries обратно объект
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
  
console.log(doublePrices.meat);     // 8
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРОЧИТАТЬ: https://learn.javascript.ru/destructuring-assignment
// Деструктуризация массива

// оператор «остаточные параметры» – троеточие ("..."):
let obj = [first, ...other] = "abcdefg";
console.log( obj, first, other );   // "abcdefg" "a" ['b', 'c', 'd', 'e', 'f', 'g']

// Деструктуризация объекта
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
  
let {title, width, height} = options;
console.log(title, width, height);      // "Menu" 100 200

({title, ...els} = options );           // Выражение в скобках, чтобы всё работало (title уже объявлен)
console.log(title, els);                // "Menu" {width: 100, height: 200}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Умные параметры функций. Деструктуризация.

// мы передаём объект в функцию
options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};
  
// ...и она немедленно извлекает свойства в переменные
function showMenu( {title = "Untitled", width = 200, height = 100, items = []} = {} ) {
    // title, items  – взято из options,
    // width, height – используются значения по умолчанию
    console.log( `${title} ${width} ${height}` );   // My Menu 200 100
    console.log( items );                           // Item1, Item2
};
  
showMenu(options);  // "My Menu" 200 100 ["Item1", "Item2"]
showMenu({});       // "Untitled" 200 100 []
showMenu();         // "Untitled" 200 100 []