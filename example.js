'use strict';

const { List } = require('./index.js');

const list = new List();

list.append('a');
console.log(list); // [ 'a' ]

list.insert('b', 0);
list.insert('c', 1);
console.log(list); // [ 'b', 'c', 'a' ]

console.log(list.length()); // 3

console.log(list.reverse()); // [ 'a', 'c', 'b' ]

list.insert('c', 3);
console.log(list); // [ 'a', 'c', 'b', 'c' ]

console.log(list.findFirst('c')); // 1

console.log(list.findLast('c')); // 3

const clone = list.clone();
console.log(clone); // [ 'a', 'c', 'b', 'c' ]

console.log(clone.clear()); // []

list.delete(0);
console.log(list); // [ 'c', 'b', 'c' ]

list.deleteAll('c');
console.log(list); // [ 'b' ]

list.append('d');
list.append('d');
list.append('d');
console.log(list); // [ 'b', 'd', 'd', 'd' ]

console.log(list.get(0)); // b

clone.append('e');
list.extend(clone);
console.log(list); // [ 'b', 'd', 'd', 'd', 'e' ]