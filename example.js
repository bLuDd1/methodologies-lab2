'use strict';

const { List } = require('./index.js');

const list = new List();

list.append(1)
console.log(list.array); // [ 1 ]

list.insert(2, 0);
list.insert(5, 1);
console.log(list.array); // [ 2, 5, 1 ]

console.log(list.length()); // 3

console.log(list.reverse()); // [ 1, 5, 3 ]

list.insert(5, 3);
console.log(list.array); // [ 1, 5, 2, 5 ]

console.log(list.findFirst(5)); // 1

console.log(list.findLast(5)); // 3

const clone = list.clone();
console.log(clone.array); // [ 1, 5, 2, 5 ]

console.log(clone.clear()); // []

list.delete(0);
console.log(list.array); // [ 5, 2, 5 ]

list.deleteAll(5);
console.log(list.array); // [ 2 ]

list.append(7);
list.append(7);
list.append(7);
console.log(list.array); // [ 2, 7, 7, 7 ]

console.log(list.get(0)); // 2

console.log(list.array); // [ 2, 7, 7, 7 ]

clone.append(3);
list.extend(clone);
console.log(list.array); // [ 2, 7, 7, 7, 3 ]