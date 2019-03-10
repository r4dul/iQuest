'use strict'
function run() {
	const allInputs = document.getElementsByClassName('row mt-5')[0].getElementsByClassName("col");
	const result = document.getElementsByTagName('span')[1];
	getInputs(allInputs);
}

// I tried to make it work if more input fields are added in the index.html file (for numbers and signs) and I also added order of operation logic


function getInputs(allInputs){
		const numbers = [];
		const signs = [];
		let i;
		for(i = 0; i < allInputs.length; i++){
		let inp;
		inp = allInputs[i].getElementsByTagName('input')[0];
		if (typeof inp !== 'undefined') {
			numbers.push(inp.value);
		} else {
			signs.push(allInputs[i].innerHTML)
		}
	}
	validateNumbers(numbers, signs);
}

function validateNumbers(numbers, signs){
	let validate = 0;
	let errorMessage = "";
	numbers.forEach( number => {
		let isNumber = parseInt(number);
		if (!(parseInt(number))){
			const errorLog = document.getElementsByTagName('span')[0];
			errorLog.innerHTML = "Check the input fields. Some of them may contain invalid data.";
			return
		} else {
			validate++;
		}
	});
	if (validate === numbers.length){
		doMath(numbers, signs);
	} else {
		return -1;
	}
}


// some weird implementation
function doMath(numbers, signs) {
	let str = "";
	let i = 0;
	let nrLen = numbers.length;
	if (numbers.length !== (signs.length + 1)) {
			const errorLog = document.getElementsByTagName('span')[0];
			errorLog.innerHTML = "Your calculator format is not right. Signs and numbers don't add up.";
			return ;
	}

	let total = 0;
	let nextSign;
	while (numbers.length !== 1) {
		//console.log(signs);
		let currentSign = signs[0];
//		console.log(numbers.length);
		if (numbers.length > 2) {
			nextSign = signs[1];
		}
		if (currentSign.indexOf("*") > -1 || currentSign.indexOf("/") > -1){
			total = eval(numbers[0] + currentSign + numbers[1]);
			numbers.splice(0, 2);
			signs.splice(0, 1);
			numbers.unshift(total);
/*			console.log(numbers);
			console.log("first if" + eval(numbers[0] + currentSign + numbers[1]));*/
		} else if (nextSign.indexOf("*") > -1 || nextSign.indexOf("/") > -1) {
			total = eval(numbers[1] + nextSign + numbers[2]);
			numbers.splice(1, 2);
			numbers.splice(1, 0, total);
			signs.splice(1, 1);
			nextSign = "";
/*			console.log(numbers);
			console.log("2 if" + eval(numbers[1] + currentSign + numbers[2]));*/
		} else {
			total = eval(numbers[i] + currentSign + numbers[i + 1]);
			numbers.splice(0, 2);
			numbers.unshift(total);
			signs.splice(0, 1);
/*			console.log(numbers);
			console.log(signs);*/
		}
	}


	const resultData = document.getElementsByTagName('span')[1];
/*	console.log(str);
	const result = eval(str);*/
	resultData.innerHTML = numbers;
}