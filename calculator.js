'use strict';

const numberInput = document.getElementById('number-input');
const keys = document.getElementById('keys');
const resetBtn = document.getElementById('reset');

let rawValue = '0';

keys.addEventListener('click', (e) => {
	const key = e.target.closest('.calculator__number-key');
	if (!key) return;

	const number = key.value;

	if (rawValue === '0') {
		rawValue = number;
	} else {
		if (numberInput.value.length >= 8) return;
		rawValue += number;
	}

	numberInput.value = Number(rawValue).toLocaleString();
});

resetBtn.addEventListener('click', (e) => {
	e.preventDefault();
	
	rawValue = '0';
	numberInput.value = rawValue;
});