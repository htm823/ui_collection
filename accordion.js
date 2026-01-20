'use strict';

const question = document.getElementById('question');
const answer = document.getElementById('answer');

question.addEventListener('click', (e) => {
	e.preventDefault();

	if (answer.classList.contains('is-open')) {
		answer.classList.remove('is-open');
	} else {
		answer.classList.add('is-open');
	}
});
