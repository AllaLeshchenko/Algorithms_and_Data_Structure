// 2. Реализуйте программу, которая принимает несколько файлов, каждый из которых содержит отсортированный список чисел, 
// и объединяет их в один отсортированный файл, используя сортировку слиянием.

const fs = require('fs');
const path = require('path');

// Тот же merge и mergeSort из первой части
function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// Загружаем и парсим числа из файла
function loadNumbersFromFile(filename) {
    const content = fs.readFileSync(path.resolve(__dirname, filename), 'utf8');
    return content
        .split(/\s|,/)
        .filter(Boolean)
        .map(Number)
        .sort((a, b) => a - b); // Убеждаемся, что каждый файл отсортирован
}

// Основная функция
function mergeSortedFiles(filenames, outputFile) {
    let allNumbers = [];

    filenames.forEach(file => {
        const nums = loadNumbersFromFile(file);
        allNumbers = merge(allNumbers, nums); // можно было бы сортировать в конце, но так эффективнее
    });

    fs.writeFileSync(outputFile, allNumbers.join(' '), 'utf8');
    console.log(`Все числа отсортированы и сохранены в ${outputFile}`);
}

// Пример использования
const inputFiles = ['file1.txt', 'file2.txt', 'file3.txt'];
const outputFile = 'merged_output.txt';

mergeSortedFiles(inputFiles, outputFile);