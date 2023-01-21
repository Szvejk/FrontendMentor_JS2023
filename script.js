const form = document.querySelector('.form');
const next = document.querySelector('.next');
const secondView = document.querySelector('.secondView');
const wrapper = document.querySelector('.wrapperFlex')

next.addEventListener('click', () => {
    wrapper.style.display = 'none';
	form.style.display = 'none';
	secondView.style.display = 'block';
});
