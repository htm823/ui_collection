'use strict';

const incrementBtn = document.getElementById('increment-btn');
const quantityInput = document.getElementById('quantity');
const decrementBtn = document.getElementById('decrement-btn');

let count = 1;

incrementBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (count >= 10) return;

	count++;

	quantityInput.value = count;
});

decrementBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (count <= 1) return;

	count--;

	quantityInput.value = count;
});

