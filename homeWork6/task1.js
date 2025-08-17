function quickSortRecursive(arr) {
    if (arr.length <= 1) {
        return arr; // Базовый случай: массив из 0 или 1 элемента уже отсортирован
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Выбираем опорный элемент
    const left = [];
    const right = [];
    const equal = [];

    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    // Рекурсивно сортируем подмассивы и объединяем результат
    return [...quickSortRecursive(left), ...equal, ...quickSortRecursive(right)];
}

// Пример
const array = [5, 3, 8, 4, 2, 7, 1, 10];
console.log(quickSortRecursive(array));