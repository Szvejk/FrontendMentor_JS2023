const next = document.querySelector('.nextStep');
const back = document.querySelector('.backStep');
const input = document.querySelector('#emailAdress');
const select = document.querySelector('.select');
const wrapper = document.querySelector('.wrapper');
const customSwitch=document.querySelector("#switch")

next.addEventListener('click', () => {
	// if (input.value === '') {
	// 	//alert('bug');
	// } else {
	select.style.display = 'block';
	wrapper.style.display = 'none';
    customSwitch.style.display='inline'
	//}
});
