// START
// READ number n
// numbers a = 0, i = n
// WHILE i > 0:
//    a = a + i
//   i = i / 2

// Анализ:
// i делится на 2 каждый раз → логарифмическое количество шагов
// Временная сложность: O(log n)
// JS-код:

function task4(n) {
    let a = 0;
    let i = n;
    while (i > 0) {
        a += i;
        i = Math.floor(i / 2);
    }
    console.log("Result:", a);
}
task4(32); // Пример вызова