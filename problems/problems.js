
/** Array Functions **/
/*
0. Sa se scrie o functie care primeste array-ul de mai jos ca parametru si returneaza un array de numere unde toate numerele au fost adunate cu 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function typeCastAndAdd(strArr) {
	return strArr.map(el => parseInt(el) + 2);
}

console.log('Typecast: ', typeCastAndAdd(strArr));

/* 
1. Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/
const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

function pluck(demoArr, key) {
	return demoArr.map(o => o[key]);
}


console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/*
2. Sa se implementeze o functie care returneaza ariile tuturor elementelor din array-ul de mai sus, aria e inaltime * latime.
*/

function calculateArea(demoArr) {
	return demoArr.map(o => o.height * o. width);
}

console.log(calculateArea(demoArr));

/*
3. Sa se scrie o functie care returneaza un subset din array-ul de mai sus unde elementele au aria mai mica sau egala cu 100
*/

function filterArr(demoArr) {
	return calculateArea(demoArr).filter(e => e <= 100);
}

console.log(filterArr(demoArr));


/*
4. Sa se implementeze o functie numita reject, care primeste un array si o functie iterator. Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze true sau false. Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte in array-ul rezultat. Daca returneaza false va fi inclus.
*/

function iterator(el) {
	return el.height < 10;
}

function reject(demoArr, iterator) {
	return demoArr.filter(el => iterator(el));
}
console.log(reject(demoArr, iterator)); // sa returneze un array de obiecte cu height < 10

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/

function findColor(demoArr, searchColor) {
	return demoArr.filter(el => el.color === searchColor);
}
console.log(findColor(demoArr, 'crimson'));

/*
6. Sa se scrie o functie care returneaza true daca toate elementele din array au aria >= 10, false altfel.
*/

function areasAreBigger(demoArr, area) {
	return calculateArea(demoArr).every(el => el >= area);
}
console.log(areasAreBigger(demoArr, 10));

/*
7. Sa se scrie o functie care returneaza true daca cel putin unul din elementele array-ului are culoarea 'green';
*/

const atLeastOneIsOfColor = (demoArr, colorSearch) => demoArr.some(el => el.color === colorSearch);
console.log(atLeastOneIsOfColor(demoArr, 'balarie'));

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/

function sumOfDistances(demoArr) {
	return demoArr.map(el => el.distance).reduce((el, currValue) => el + currValue, 0);
}
console.log('Sum of distances: ', sumOfDistances(demoArr));

/*
9. Sa se scrie o functie care returneaza un obiect in care se numara de cate ori apare fiecare culoare in parte in array-ul de obiecte. {red: 2, blue: 1, etc...}
*/

function noColors(demoArr) {
	var mySet = new Set(demoArr.map(el => el.color));
	var myMap = new Map();
	mySet.forEach(el => {
		var nr = demoArr.filter(el2 => (el2.color === el)).length;
		myMap.set(el, nr);
	});
	return myMap;
}
console.log('Number of colors: ', noColors(demoArr));

/*
10. Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica. Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/

function uniqueColors(demoArr) {
	var myMap = new Map();
	var colors = demoArr.map(el => el.color);
	var mySet = new Set(colors);
	var nr = 0;
	mySet.forEach(color => {
		nr = colors.filter(item => item === color).length;
		if (nr === 1){
			myMap.set(color, nr);
		}
	})
	return myMap;
}
console.log('Unique Colors: ', uniqueColors(demoArr));

/*
11. Sa se scrie o functie care inverseaza doua numere.
*/
let a = 5, b = 8;

b = [a, a = b][0];

console.log('A:', a, 'B:', b);

/*
12. Folosind array-ul de mai jos, vreau sa se obtina o variabila care contine un array de obiecte strcturat astfel:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const objClasses = classes.map(o => ({ subject: o[0], time: o[1], teacher: o[2]}));



console.log(objClasses);