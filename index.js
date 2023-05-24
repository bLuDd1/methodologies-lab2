'use strict';

class Node {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lengthList = 0;
    }

    length() {
        return this.lengthList;
    }

    append(element) {
        if (typeof element !== 'string') return;
        const node = new Node(element);
        if (this.head !== null) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.lengthList++;
    }

    insert(element, index) {
        if (typeof element !== 'string') {
            throw new Error('Element must be a string!')
        }
        if (index < 0 || index > this.lengthList) {
            throw new Error('Index is invalid!')
        }

        const node = new Node(element);

        if (index === 0) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else if (index === this.lengthList) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            let currentNode = this.head;
            while (index - 1) {
                currentNode = currentNode.next;
            }
            node.prev = currentNode;
            node.next = currentNode.next;
            currentNode.next.prev = node;
            currentNode.next = node;
        }
    this.lengthList++;
    }

    delete(index) {
        if (index < 0 || index > this.lengthList) {
            throw new Error('Index is invalid!')
        }

        let deletedNode;
        if (index === 0) {
            deletedNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        } else if (index === this.lengthList - 1) {
            deletedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let currentNode = this.head;
            let counter = 0;
            while (index !== counter) {
                currentNode = currentNode.next;
                counter++;
            }
            deletedNode = currentNode;
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        this.lengthList--;
        return deletedNode.value;
    }

    deleteAll(element) {
        if (typeof element !== 'string') {
            throw new Error('Element must be a string!')
        }

        let currentNode = this.head;
        let deletedCount = 0;
        while (currentNode) {
            if (currentNode.value === element) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (currentNode === this.head) {
                    this.head = currentNode.next;
                    this.head.prev = null;
                } else if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    this.tail.next = null;
                } else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
                deletedCount++;
            }
            currentNode = currentNode.next;
        }
        this.lengthList -= deletedCount;
    }

    get(index) {
        if (index < 0 || index > this.lengthList) {
            throw new Error('Index is invalid!')
        }

        let currentNode = this.head;
        let counter = 0;
        while (index !== counter) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode.value;
    }

    clone() {
        const clonedList = new List();
        let currentList = this.head;
        while (currentList) {
            clonedList.append(currentList.value);
            currentList = currentList.next;
        }
        return clonedList;
    }

    reverse() {
        let currentNode = this.head;
        let temp;
        while (currentNode) {
            temp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = temp;
            currentNode = temp;
        }
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }

    findFirst(element) {
        let i = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === element) return i;
            currentNode = currentNode.next;
            i++;
        }
        return -1;
    }

    findLast(element) {
        let i = this.lengthList - 1;
        let currentNode = this.tail;
        while (currentNode) {
            if (currentNode.value === element) return i;
            currentNode = currentNode.prev;
            i--
        }
        return -1;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.lengthList = 0;
        return this;
    }

    extend(elements) {
        let currentNode = elements.head;
        while (currentNode) {
            this.append(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

module.exports = { List };