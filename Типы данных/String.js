// ПРОЧИТАТЬ: https://learn.javascript.ru/string#izmenenie-registra
let str = "Hello!";

console.log(
    str.length,             // длина строки
    str[0],                 // 1й символ
    str[str.length - 1],    // последний символ
    );

for (let sym of str) {
    console.log(sym);   // H, e, l, l, o, !
};

console.log(str.toLowerCase(), str.toUpperCase());  // Изменение регистра

// Поиск подстроки (.indexOf())
str = "Widget with id";

console.log(
    str.indexOf("Widget"),   // 0. подстрока 'Widget' найдена в начале
    str.indexOf("widget"),   // -1. подстрока 'Widget' не найдена
    str.indexOf("Widget", 1),// -1. Поиск подстроки с определённой позиции
    "\n",
);

// Поиск всех вхождений подстроки в строку
str =   "Чтобы найти все вхождения подстроки, нужно запустить" +
        "indexOf в цикле. Каждый раз, получив очередную позицию," +
        "начинаем новый поиск со следующей";
let target = "на";
let pos = 0;
while (true) {
    let foundPos = str.indexOf (target, pos);
    if (foundPos == -1)
        break;
    console.log (`Найдено тут: ${foundPos}`);
    pos = foundPos + 1;
};

if (str.indexOf("на") != -1) {
    console.log("Совпадения есть!");
};

// Поиск подстроки (.includes())
str = "Widget with id";
console.log(
    str.includes("Widget"),     // true. Есть совпадения
    str.includes("widget"),     // false. Нет совпадений
    str.includes("Widget", 1),  // false. Нет совпадений. Поиск с позиции 1
    "Widget".startsWith("Wid"), // true. Строка "Widget" начинается на "Wid"
    "Widget".endsWith("det"),   // false. Строка "Widget" не заканчивается на "det"
    "\n",
);

// Получение подстроки
str = "Widget with id";
console.log(
    str.slice(0, 5),    // 'Widge', символы от 0 до 5 (не включая 5)
    "\n",
    str.slice(3),       // "get with id", символы от 3 до конца (включая 3)
    "\n",
    str.slice(-4, -1),  //  "h i", от позиции 4 справа до позиции 1 справа
    "\n",
);

// Получение подстроки
str = "stringify";
console.log(
    str.substring(2, 6),    // "ring"
    str.substring(6, 2),    // "ring"
    str.slice(2, 6),        // "ring"
    str.slice(6, 2),        // "" (пустая строка)
    str.substr(-4, str.length-1),   // "gify"
    "\n",
);

/** Методы
 * 1) slice(start, end)
 *      - выбирает от start до end (не включая end).
 *      - отрицательные значения: можно передавать отрицательные значения.
 * 2) substring(start, end)
 *      - выбирает между start и end.
 *      - отрицательные значения: отрицательные значения равнозначны 0.
 * 3) substr(start, length)
 *      - выбирает length символов, начиная от start.
 *      - отрицательные значения: значение start может быть отрицательным.
 * 
 * !!! slice более гибок, он поддерживает отрицательные аргументы, и его короче писать.
 *      Так что, в принципе, можно запомнить только его.
 */

console.log(
    "AB".charCodeAt(0),                 // 65. Возвращает код для символа, находящегося на позиции 0
    "AB".charCodeAt(1),                 // 66
    String.fromCodePoint(65),           // "A". Создаёт символ по его коду
);

/** Правильное сравнение строк
 * 
 *  str.localeCompare(str2)
 *      возвращает число, которое показывает, какая строка больше в соответствии с правилами языка.
 * 
 *  - Отрицательное число, если str меньше str2.
 *  - Положительное число, если str больше str2.
 *  - 0, если строки равны.
 * 
 *  У этого метода есть два дополнительных аргумента:
 *  - Первый позволяет указать язык (по умолчанию берётся из окружения) — от него зависит порядок букв.
 *  - Второй — определить дополнительные правила, такие как чувствительность к регистру, а также следует ли
 *      учитывать различия между "a" и "á".
 */ 
console.log( "Amongus".localeCompare('Zenith') )    // -1