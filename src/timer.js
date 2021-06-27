import { getWeekDay } from './dateTime.js';
import { getTime } from './getTime.js';
import { timeOfDay } from './getTimeDay.js';
import { renderDate } from './renderDate.js';

const changeWindow = document.querySelector('.change-window'),
	form = document.getElementById('form-date'),
	out = document.querySelector('.out'),
	title = document.querySelector('h1'),
	message = document.querySelector('.message');

changeWindow.addEventListener('click', () => {
	if (changeWindow.textContent === 'Таймер') {
		title.style.display = 'none';
		form.style.display = 'none';
		message.style.display = 'none';
		out.style.display = 'block';
		changeWindow.textContent = 'Калькулятор';
	}

	else if (changeWindow.textContent === 'Калькулятор') {
		title.style.display = 'block';
		form.style.display = 'block';
		message.style.display = 'block';
		out.style.display = 'none';
		changeWindow.textContent = 'Таймер';
	}
});

function dateTime() {
	let today = new Date();
	getWeekDay(today);
	timeOfDay(today);
	getTime(today);
	renderDate(today);
}
dateTime();
setInterval(dateTime, 1000);
