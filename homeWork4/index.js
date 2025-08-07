// arr1 = [100, 112, 256, 349, 770]
// arr2 = [72, 86, 113, 119, 265, 445, 892]

// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.

// Решение 1: Интуитивное (слияние до k-го элемента)
// Алгоритм:
// 1.Создаём 2 указателя — по одному для каждого массива.
// 2.Сравниваем текущие элементы, добавляя меньший в объединение.
// 3.Повторяем, пока не дойдём до k-го элемента.
// 4.Возвращаем его.

function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0;
    let result;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result = arr1[i];
            i++;
        } else {
            result = arr2[j];
            j++;
        }
        count++;
        if (count === k) return result;
    }

    // Если один массив закончился
    while (i < arr1.length) {
        result = arr1[i];
        i++;
        count++;
        if (count === k) return result;
    }

    while (j < arr2.length) {
        result = arr2[j];
        j++;
        count++;
        if (count === k) return result;
    }

    return -1; // если k слишком большое
}

// Пример:
const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(`k-й элемент:`, findKthElement(arr1, arr2, k));