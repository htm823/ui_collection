'use strict';

const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const quantityInput = document.getElementById('quantity');
const addCartBtn = document.getElementById('add-cart-btn');

let count = 1;

incrementBtn.addEventListener('click', function (e) {
	e.preventDefault();

	if (count >= 10) return;

	count++;

	quantityInput.value = count;
});

decrementBtn.addEventListener('click', function (e){
	e.preventDefault();

	if (count <= 1) return;

	count--;

	quantityInput.value = count;
});