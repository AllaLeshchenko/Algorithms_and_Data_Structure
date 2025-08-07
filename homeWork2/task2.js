// START
// READ number n
// numbers i = 0, j = 0, a = 0
// FOR i = n/2; i <= n; i + 1
//    FOR j = 2; j <= n; j *= 2
//       a = a + n / 2

//  Анализ:
// Внешний цикл: от n/2 до n → ≈ n/2 итераций → O(n)
// Внутренний цикл: j *= 2 → логарифмический рост → O(log n)
// Временная сложность: O(n log n)
// JS-код:

function task2(n) {
    let a = 0;
    for (let i = Math.floor(n / 2); i <= n; i++) {
        for (let j = 2; j <= n; j *= 2) {
            a += n / 2;
        }
    }
    console.log("a =", a);
}

task2(8);