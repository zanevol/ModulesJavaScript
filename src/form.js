import render from './common.js';
import { diffDates } from './date.js';
const form = document.getElementById('form-date');


form.addEventListener('submit', event => {
	event.preventDefault();
	const date1 = Date.parse(new Date(event.target.elements.date1.value)),
		date2 = Date.parse(new Date(event.target.elements.date2.value));

	if (!date1 || !date2) {
		render('Введите оба значения');
		return;
	}
	else if (date1 === date2) {
		render('Оба значения равны!');
		return;
	}
	render('');
	const result = diffDates(date1, date2);
	render(`Разница ${result.getDate() - 1} дней, ${result.getMonth()} месяцев , ${result.getFullYear() - 1970} лет`);
});