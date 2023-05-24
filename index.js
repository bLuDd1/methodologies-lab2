'use strict';

class List {
    constructor() {
        this.array = [];
    }

    length() {
        return this.array.length;
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
                i--;
            }
        }
    }

    get(index) {
        if (this.array[index] === undefined) {
            console.log('Must be correct index!');
        }
        return this.array[index];
    }

    clone() {
        const clonedList = new List();
        this.array.map((el) => clonedList.append(el));
        return clonedList;
    }

    reverse() {
        return this.array.reverse();
    }

    findFirst(element) {
        return this.array.indexOf(element);
    }

    findLast(element) {
        return this.array.lastIndexOf(element);
    }

    clear() {
        return this.array = [];
    }

    extend(elements) {
        elements.array.map((el) => this.append(el));
    }
}

module.exports = { List };