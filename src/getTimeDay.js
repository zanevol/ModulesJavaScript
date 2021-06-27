export function timeOfDay(today) {

	let timeDay = today.toLocaleTimeString('ru-RU');
	let res = '';

	if (timeDay >= '05:00:00' && timeDay < '11:59:59') {
		res = 'Доброе утро!';
	}
	else if (timeDay >= '12:00:00' && timeDay <= '17:59:59') {
		res = 'Добрый день!';
	}
	else if (timeDay >= '18:00:00' && timeDay <= '23:59:59') {
		res = 'Добрый вечер!';
	}
	else if (timeDay >= '00:00:00' && timeDay <= '04:59:59') {
		res = 'Доброй ночи!';
	}
	return res;
};