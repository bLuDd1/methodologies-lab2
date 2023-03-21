'use strict';

class List {
    constructor() {
        this.array = [];
    }

    length() {
        this.array.length;
    }

    append(element) {
        this.array.push(element);
    }

    insert(element, index) {
        this.array.splice(index, 0, element);
    }

    delete(index) {
        this.array.splice(index, 1);
    }

    deleteAll(element) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                this.array.splice(i, 1);
            }
        }
    }

    get(index) {
        return this.array[index];
    }

    clone() {
        const clonedList = new List();
        this.array.map((el) => clonedList.append(el));
        return clonedList;
    }

    reverse() {
        this.array.reverse();
    }

    findFirst(element) {
        this.array.indexOf(element);
    }

    findLast(element) {
        this.array.lastIndexOf(element);
    }

    clear() {
        this.array = [];
    }

    extend(elements) {
        elements.array.map((el) => this.array.push(el));
    }

}