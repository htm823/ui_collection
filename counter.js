'use strict';

const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const numInput = document.getElementById('amount');

let count = 1;

incrementBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (count >= 10) return;

	count++;
	numInput.value = count;
});

decrementBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (count <= 1) return;

	count--;
	numInput.value = count;
});
