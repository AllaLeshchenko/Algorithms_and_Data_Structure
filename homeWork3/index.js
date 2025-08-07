// Рекурсивная функция Фибоначчи
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Итерационная функция Фибоначчи
function fibonacciIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Пример вызова
let n = 10;
console.log("Фибоначчи рекурсивно:", fibonacciRecursive(n));
console.log("Фибоначчи итеративно:", fibonacciIterative(n));


function hanoi(n, source, target, auxiliary) {
    if (n === 1) {
        console.log(`Переместить диск 1 с ${source} на ${target}`);
        return;
    }
    hanoi(n - 1, source, auxiliary, target);
    console.log(`Переместить диск ${n} с ${source} на ${target}`);
    hanoi(n - 1, auxiliary, target, source);
}

// Пример: переместить 3 диска
let disks = 3;
hanoi(disks, 'Левый', 'Правый', 'Средний');