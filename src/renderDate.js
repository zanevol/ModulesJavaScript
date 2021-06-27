import { timeOfDay } from './getTimeDay.js';
import { getWeekDay } from './dateTime.js';
import { getTime } from './getTime.js';

export function renderDate(today) {
	const out = document.querySelector('.out');
	out.innerHTML = `${timeOfDay(today)}<br>
									Сегодня: ${getWeekDay(today)}<br>
									Текущее время: ${getTime(today)}`;
}