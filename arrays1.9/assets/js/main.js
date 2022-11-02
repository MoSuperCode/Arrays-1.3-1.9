/* 
Wenn Du Dinge am Anfang und Ende eines JavaScript-Arrays hinzufügst und entfernst, kann es schwierig sein, sich daran zu erinnern, welche Methode was tut. Hier sind einige Tipps:

Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).

Push und Pop verschieben das Array NICHT seitlich (weil sie am Ende Elemente hinzufügen und entfernen).

In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere Wort das Array länger. */

const numbers = [23, 54, 75];
console.log(numbers);

numbers.push(2, 4, 6, 8, 10);
console.log(numbers);

numbers.unshift(1, 3, 5, 7, 9);
console.log(numbers);

numbers.pop();
numbers.pop();
console.log(numbers);

numbers.shift();
numbers.shift();
console.log(numbers);