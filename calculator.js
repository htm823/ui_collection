'use strict';

const numberInput = document.getElementById('number-input');
const keys = document.getElementById('keys');
const resetBtn = document.getElementById('reset');
const plusBtn = document.getElementById('plus');
const equalBtn = document.getElementById('equal');

let rawValue = '0';
let firstValue = '0';

keys.addEventListener('click', (e) => {
	const key = e.target.closest('.calculator__number-key');
	if (!key) return;

	const number = key.value;

	if (rawValue === '0') {
		rawValue = number;
	} else {
		if (rawValue.length >= 8) return;
		rawValue += number;
	}

	numberInput.value = Number(rawValue).toLocaleString();
});

resetBtn.addEventListener('click', (e) => {
	e.preventDefault();

	resetInput();
});

plusBtn.addEventListener('click', (e) => {
	e.preventDefault();

	firstValue = rawValue;
	resetInput();
});

function resetInput() {
	rawValue = '0';
	numberInput.value = rawValue;
}

equalBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const secondValue = rawValue;
	const sum = Number(firstValue) + Number(secondValue);

	rawValue = sum;
	numberInput.value = rawValue.toLocaleString();
});
