// START
// READ number n
// numbers a = 0
// FOR i = 0; i < n; i + 1
//    FOR j = n; j > i; j - 1
//      a = a + i + j

// Анализ:
// Внешний цикл: i от 0 до n → n итераций
// Внутренний цикл: от n до i → в среднем ~n/2 итераций
// Временная сложность: O(n^2)
// JS-код:

function task3(n) {
    let a = 0;
    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            a += i + j;
        }
    }
    console.log("a =", a);
}

task3(5);