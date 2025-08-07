// START
// READ number n
// IF n == 1 THEN return
// FOR i = 1; i <= n; i++
//   FOR j = 1; j <= n; j++
//       print "*"
//       BREAK

// Анализ:
// Внутренний цикл j всегда делает только 1 итерацию, из-за BREAK.
// Внешний цикл i работает n раз.
// Временная сложность: O(n)

// JS-код:

function task1(n) {
    if (n === 1) return;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log("*");
            break; // сразу выходим из внутреннего цикла
        }
    }
}

task1(5);