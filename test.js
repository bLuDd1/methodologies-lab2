'use strict';

const { List } = require('./index');

describe('Test length method', () => {
    test('List is empty and length is 0', () => {
        const list = new List();
        expect(list.length()).toBe(0);
    });

    test('List contains 3 elements', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('c');
        expect(list.length()).toBe(3);
    });
});

describe('Test append method', () => {
    test('Adding an element to the end of list', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        expect(list.get(0)).toBe('a');
        expect(list.get(1)).toBe('b');
        expect(list.length()).toBe(2);
    });
});

describe('Test insert method', () => {
    test('Adding an element to the certain position', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.insert('c', 0);
        expect(list.get(0)).toBe('c');
    });
});

describe('Test delete method', () => {
    let list;
    beforeEach(() => {
        list = new List();
        list.append('a');
        list.append('b');
        list.append('c');
        list.append('d');
        list.append('e');
    });
    test('Delete the first element in list', () => {
        list.delete(0);
        expect(list.get(0)).toBe('b');
    });

    test('Delete the last element in list', () => {
        list.delete(4);
        expect(list.get(3)).toBe('d');
    });

    test('Delete the third element in list', () => {
        list.delete(2);
        expect(list.get(2)).toBe('d');
    });
});

describe('Test deleteAll method', () => {
    let list;
    beforeEach(() => {
        list = new List();
        list.append('a');
        list.append('a');
        list.append('a');
    });

    test('Delete all elements with same value in list', () => {
        expect(list.length()).toBe(3);
        list.deleteAll('a');
        expect(list.length()).toBe(0);
    });

    test('Delete all elements with same value in list with different values', () => {
        list.append('b');
        list.append('c');
        expect(list.length()).toBe(5);
        list.deleteAll('a');
        expect(list.length()).toBe(2);
    });

    test('Delete all elements which do not exist in list', () => {
        list.deleteAll('b');
        expect(list.length()).toBe(3);
    });
});

describe('Test get method', () => {
    let list;
    beforeEach(() => {
        list = new List();
        list.append('a');
        list.append('b');
        list.append('c');
    });

    test('Get first element in list', () => {
        expect(list.get(0)).toBe('a');
    });

    test('Get last element in list', () => {
        expect(list.get(2)).toBe('c');
    });
});

describe('Test clone method', () => {
    test('Clone list', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('c');
        const clonedList = list.clone();
        expect(clonedList.length()).toBe(3);
        expect(clonedList.get(0)).toBe('a');
        expect(clonedList.get(1)).toBe('b');
        expect(clonedList.get(2)).toBe('c');
    });
});

describe('Test reverse method', () => {
    test('Reverse list', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('c');
        list.reverse();
        expect(list.get(0)).toBe('c');
        expect(list.get(1)).toBe('b');
        expect(list.get(2)).toBe('a');
    });
});

describe('Test findFirst method', () => {
    test('Find the first element with the certain value', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('b');
        expect(list.findFirst('a')).toBe(0);
        expect(list.findFirst('b')).toBe(1);
    });
});

describe('Test findLast method', () => {
    test('Find the last element with the certain value', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('b');
        list.append('a');
        expect(list.findLast('a')).toBe(3);
        expect(list.findLast('b')).toBe(2);
    });
});

describe('Test clear method', () => {
    test('Clear the list', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('b');
        list.append('a');
        expect(list.length()).toBe(4);
        list.clear();
        expect(list.length()).toBe(0);
    });
});

describe('Test extend method', () => {
    test('Extend list with another', () => {
        const list = new List();
        list.append('a');
        list.append('b');
        list.append('c');
        const list2 = new List();
        list2.append('1');
        list2.append('2');
        list2.append('3');

        list.extend(list2);
        expect(list.get(0)).toBe('a');
        expect(list.get(1)).toBe('b');
        expect(list.get(2)).toBe('c');
        expect(list.get(3)).toBe('1');
        expect(list.get(4)).toBe('2');
        expect(list.get(5)).toBe('3');
    });
});