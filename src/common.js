
const message = document.querySelector('.message');

export default function renderMessage(text) {
	message.style.color = 'tomato';
	message.textContent = text;
}