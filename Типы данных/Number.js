// ПРОЧИТАТЬ: https://learn.javascript.ru/data-types

let num =  new Number(1);   // создаётся объект (примитив как объект - «объект-обёртка»)
let num2 = Number(2);       // создаётся число  (примитив обыкновенный)
console.log(num, typeof num, " и ", num2, typeof num2); // "Number (1) object  и  2 number"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
num = 1e9;      // 1 миллиард
num2 = 1e-3;    // 0.001

let num3 = 0b111;   // двоичная СС: 7
let num4 = 0o377;   // восьмеричная СС: 255
let num5 = 0xff;    // шеснадцатиричная СС: 255
console.log(num, num2, num3, num4, num5);

num = 255;

// toString() перевод числа в строку
console.log( num.toString(),    // обычный перевод числа в строку
             num.toString(2),   // перевод в двоичную СС
             num.toString(8),   // перевод в восьмеричную СС
             num.toString(16),  // перевод в шеснадцатиричную СС
             1234..toString(8), // перевод числа в восьмеричную СС
             "\n");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
num = 1.4, num2 = 1.5, num3 = 1.6;

console.log( Math.floor(num), Math.ceil(num), Math.round(num), "\n",
             Math.floor(num2), Math.ceil(num2), Math.round(num2), "\n",
             Math.floor(num3), Math.ceil(num3), Math.round(num3)
            );

num = 12.34, num2 = 12.35, num3 = 12.36;
console.log(num.toFixed(1), num2.toFixed(1), num3.toFixed(1));  // теперь это строки!
console.log(num.toFixed(5), "\n");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let sum = 0.1 + 0.2;
console.log(sum == 0.3, ", sum =", sum);    // false. 0.1 + 0.2 != 0.3 (ага)
console.log(sum.toFixed(2));                // "0.30"
console.log(+sum.toFixed(2));               // 0.3
console.log(+sum.toFixed(2) == 0.3, "\n");  // true
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log( isNaN(NaN), NaN == NaN, NaN === NaN ); // NaN != NaN (ага)
console.log( isNaN("A"), isNaN(123));
console.log( isNaN(123));

num = 123;
num2 = "";
console.log( isFinite(num),     // Можно проверить, является ли num числом
             isFinite(num2),    // Пустая строка превратится 0, и вернётся true
             Number.isFinite("123"),    // false. "123" - строка, а не число
             isFinite("123"),           // true. Сначала "123" преобразуется в число 123
             "\n");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
num = "100руб", num2 = "25.5kg";
console.log(+num, Number(num), +num2, Number(num2));    // NaN NaN NaN NaN
console.log(parseInt(num), parseFloat(num2));           // 100 25.5

num = "A123";
console.log(parseInt(num3));    // NaN

num = 'ff';
console.log(parseInt(num));        // NaN

/*  2й параметр определяет СС, чтобы parseInt мог также читать строки
    с шестнадцатеричными числами, двоичными числами и т.д. */
console.log(parseInt(num, 16), "\n");    // 255
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРОЧИТАТЬ: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
// МЕТОДЫ MATH

console.log(
    Math.sqrt(144), // Квадратный корень числа
    Math.cbrt(125), // Кубический корень числа
    Math.SQRT1_2,   // Квадратный корень 1/2 (~0.707)
    Math.SQRT2,     // Квадратный корень 2   (~1.414)
    Math.PI,        // Число Пи
);

console.log (
    Math.max(1, 2),
    Math.min(1, 2),
    Math.abs(-25),
    Math.pow(2, 3),
    Math.log( Math.exp(1) ),    // натуральный логарифм числа (loge, также известен как ln)
    Math.log2( 8 ),             // двоичный логарифм числа (log2)
    Math.log10( 100 ),          // десятичный  логарифм числа (log10)
);

console.log (
    Math.asin(1),               // Арксинус числа x [в радианах] (x >= -1 && x <= 1). ~1.571
    Math.asin(1)*180/Math.PI,   // Арксинус числа x [в градусах] (x >= -1 && x <= 1). 90
    Math.sin(2),                // -1. x - Число радиан
    Math.exp(1),                // e*x. e - число Эйлера (2,718…)
);

console.log (
    Math.random(),      // Возвращает псевдослучайное число в диапазоне от 0 до 1
    Math.sign(-3),      // Возвращает -1 (если x отрицательный) или 1 (если x положительный)
    Math.trunc(5.245),  // Возвращает целую часть числа, убирая дробные цифры
    "\n",
);