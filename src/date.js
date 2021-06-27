
export function diffDates(date1, date2) {

	let calcDate;

	if (date1 > date2) {
		return calcDate = new Date((date1 - date2));
	}
	else if (date1 < date2) {
		return calcDate = new Date((date2 - date1));
	}
	else {
		return calcDate = 'Что-то пошло не так!';
	}
}
