const next = document.querySelector('.nextStep');
const back = document.querySelector('.backStep');
const input = document.querySelector('#emailAdress');
const select = document.querySelector('.select');
const wrapper = document.querySelector('.wrapper');
const secondView = document.querySelector('.secondView');
const pick = document.querySelector('.pickAdd-ons');

pick.style.display = 'none';
next.addEventListener('click', () => {
	// if (input.value === '') {
	// 	//alert('bug');
	// } else {
	select.style.display = 'block';
	wrapper.style.display = 'none';

	next.addEventListener('click', () => {
		select.style.display = 'none';
		pick.style.display = 'block';
	});

	//}
});
