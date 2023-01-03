// ПРОЧИТАТЬ: https://learn.javascript.ru/date

// Встроенный объект Date содержит дату и время, а также предоставляет методы управления ими.

let now = new Date();   // создания нового объекта Date
console.log(now);       // показывает текущие дату и время

/**
 * new Date(milliseconds)
 * new Date(datestring)
 * new Date(year, month, date, hours, minutes, seconds, ms)
 */
now = new Date(0);          // 0 миллисекунд
now = new Date(1000);       // 1 секунда
now = new Date(60000);      // 1 минута
now = new Date(3600000);    // 1 час
console.log(now);

now = new Date("2017-01-26");   // Thu Jan 26 2017 07:00:00 GMT+0700 (Красноярск, стандартное время)
console.log(now);

// new Date(year, month, date, hours, minutes, seconds, ms)
now = new Date(2017, 01, 26, 12, 30, 45, 0);
// Sun Feb 26 2017 12:30:45 GMT+0700 (Красноярск, стандартное время)
console.log(now, "\n");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Получение компонентов даты


now = new Date();

console.log(
    now, "\n",              // Fri Nov 04 2022 20:48:34 GMT+0700 (Красноярск, стандартное время) 
    now.getDay(),           // 5. Вернуть день недели от 0 (воскресенье) до 6 (суббота).
    now.getFullYear(),      // 2022. Получить год (4 цифры).
    now.getMonth(),         // 10. Получить месяц, от 0 до 11.
    now.getDate(),          // 4
    now.getHours(),         // 20
    now.getMinutes(),       // 48
    now.getSeconds(),       // 34
    now.getMilliseconds(),  // 162
    "\n",
    now.getTime(),  // Для даты now возвращает количество миллисекунд, прошедших с 1 января 1970 года UTC+0
    now.getTimezoneOffset(),    // Возвращает разницу в минутах между UTC и местным часовым поясом
);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Установка компонентов даты

/**
 * Следующие методы позволяют установить компоненты даты и времени:
 *      - setFullYear(year, [month], [date])
 *      - setMonth(month, [date])
 *      - setDate(date)
 *      - setHours(hour, [min], [sec], [ms])
 *      - setMinutes(min, [sec], [ms])
 *      - setSeconds(sec, [ms])
 *      - setMilliseconds(ms)
 *      - setTime(milliseconds)
 *          (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
 */
now = new Date();
now.setHours(0);    // Меняем текущий час на 0
console.log(now);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Преобразование к числу, разность дат

now = new Date();
console.log(+now, now.getTime());  // количество миллисекунд, то же самое, что date.getTime()

// метод Date.now() работает быстрее и не нагружает сборщик мусора
let start = Date.now(); // начинаем отсчёт времени
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
};
let end = Date.now(); // заканчиваем отсчёт времени

console.log( `Цикл отработал за ${end - start} миллисекунд\n` );
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Бенчмаркинг (вычисления, замеряющие производительность функций)

function diffSubtract(date1, date2) {
    return date2 - date1;
};
  
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
};
  
function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++)
        f(date1, date2);
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// добавляем для "разогрева" перед основным циклом, тк первые запуски не оптимизированы должным образом
bench(diffSubtract);
bench(diffGetTime);

// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

console.log( 'Итоговое время diffSubtract: ' + time1 );
console.log( 'Итоговое время diffGetTime: ' + time2 );
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Разбор строки с датой

/**
 * Метод Date.parse(str) обрабатывает строку и возвращает таймстамп (количество миллисекунд с 1 января
 *  1970 года UTC+0). Если формат неправильный, возвращается NaN.
 * 
 * Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:
 *  - YYYY-MM-DD – это дата: год-месяц-день.
 *  - Символ "T" используется в качестве разделителя.
 *  - HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
 *  - Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm.
 *      Если указать просто букву Z, то получим UTC+0.
 * 
 * Возможны и более короткие варианты
 */

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms);    // 1327611110417 (таймстамп)