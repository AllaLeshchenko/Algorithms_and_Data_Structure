function quickSortIterative(arr) {
    const stack = [];

    // Помещаем начальный диапазон в стек
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length) {
        const end = stack.pop();
        const start = stack.pop();

        if (start >= end) continue;

        const pivotIndex = partition(arr, start, end);

        // Добавляем подмассивы в стек
        stack.push(start);
        stack.push(pivotIndex - 1);

        stack.push(pivotIndex + 1);
        stack.push(end);
    }

    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let i = low;
    let j = high;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
            i++;
            j--;
        }
    }

    return i;
}

// Пример
const array2 = [5, 3, 8, 4, 2, 7, 1, 10];
console.log(quickSortIterative(array2));
