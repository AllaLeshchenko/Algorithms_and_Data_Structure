class Stack {
    constructor() {
        this.items = []; // массив для хранения элементов
    }

    // Проверка: стек пустой?
    empty() {
        return this.items.length === 0;
    }

    // Добавление элемента
    push(element) {
        this.items.push(element);
    }

    // Удаление и возврат верхнего элемента
    pop() {
        if (this.empty()) {
            return "Стек пустой!";
        }
        return this.items.pop();
    }

    // Просмотр верхнего элемента без удаления
    peek() {
        if (this.empty()) {
            return "Стек пустой!";
        }
        return this.items[this.items.length - 1];
    }

    // Поиск элемента: возвращает позицию от вершины (0 - top), или -1
    search(element) {
        for (let i = this.items.length - 1, pos = 0; i >= 0; i--, pos++) {
            if (this.items[i] === element) {
                return pos;
            }
        }
        return -1;
    }

    // Вывод содержимого стека (для тестов)
    print() {
        console.log("Содержимое стека:", [...this.items]);
    }
}

// Пример использования
const stack = new Stack();

stack.push("a");
stack.push("b");
stack.push("c");

stack.print(); // ["a", "b", "c"]

console.log("Верхушка стека (peek):", stack.peek()); // "c"
console.log("Поиск 'b':", stack.search("b")); // 1
console.log("Удалили элемент (pop):", stack.pop()); // "c"
console.log("Стек пустой?", stack.empty()); // false
stack.print(); // ["a", "b"]