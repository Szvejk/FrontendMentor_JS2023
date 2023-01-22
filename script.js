const form = document.querySelector('.form');
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const view0 = document.querySelector('.view-0');
const view1 = document.querySelector('.view-1');

let counter = 0;

const checkView = (value) => {
	if (value == 0) {
		view0.style.display = 'flex';
		view1.style.display = 'none';
	} else if (value == 1) {
		view0.style.display = 'none';
		view1.style.display = 'flex';
	}
};

next.addEventListener('click', () => {
	counter++;
	checkView(counter);
});

back.addEventListener('click', () => {
	counter--;
	checkView(counter);
});
