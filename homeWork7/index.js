// Немецкий текст для анализа
const text = `
    Die Straße ist schön. Überall blühen Blumen, und die Vögel singen.
    Äpfel und Öl sind auf dem Tisch. Grüße von München!
`;

// Немецкие буквы (латиница + умляуты + ß)
const germanLetters = 'abcdefghijklmnopqrstuvwxyzäöüß';

// Создаем пустой объект для хранения частот
const frequency = {};

// Инициализируем словарь с нулями для каждой буквы
for (const letter of germanLetters) {
    frequency[letter] = 0;
}

// Проходим по каждому символу текста
for (const char of text.toLowerCase()) { // Приводит текст к нижнему регистру, чтобы считать A и a как одну букву.
    if (germanLetters.includes(char)) {  // Проверяет, является ли символ допустимой немецкой буквой.
        frequency[char]++;               // Увеличивает счётчик появления этой буквы.
    }
}

// Выводим результат
console.log("Частотный словарь букв немецкого алфавита:\n");
for (const [letter, count] of Object.entries(frequency)) {
    console.log(`${letter}: ${count}`);
}
