const form = document.querySelector('.form');
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const view0 = document.querySelector('.view-0');
const view1 = document.querySelector('.view-1');
const view2 = document.querySelector('.view-2');
const view3 = document.querySelector('.view-3');
const arcade = document.querySelector('.arcade');
const summary = document.querySelector('.summary');
const advanced = document.querySelector('.advanced');
const pro = document.querySelector('.pro');
const number = document.querySelector('.numberSummary');
const prizeFirst = document.querySelector('.prizeArcade');
const prizeSecond = document.querySelector('.prizeAdvanced');
const prizeThird = document.querySelector('.prizePro');
const switcher = document.querySelector('#switcher');
const total = document.querySelector('.total');
const option1 = document.querySelector('#first');
const inputOption1 = document.querySelector('#option1');
const option2 = document.querySelector('#second');
const inputOption2 = document.querySelector('#option2');
const option3 = document.querySelector('#third');
const inputOption3 = document.querySelector('#option3');
const service = document.querySelector('.service');
const prizeOfServices1 = document.querySelector('.prizeFirst');
const prizeOfServices2 = document.querySelector('.prizeSecond');
const prizeOfServices3 = document.querySelector('.prizeThird');
const largerStorage = document.querySelector('.largerStorage');
const customizable = document.querySelector('.customizable');
const summaryTotal = document.querySelector('.summaryTotal');
let yearlyOrMonthly = 'monthly';
const numberOne = document.querySelector('.numberOne');
const numberSecond = document.querySelector('.numberSecond');
const numberThree = document.querySelector('.numberThree');
const numberFour = document.querySelector('.numberFour');

let sumOrder = 0;

// step 2
arcade.addEventListener('click', () => {
	summary.innerHTML = `Arcade<div class="numberSummary">${prizeFirst.textContent}</div>`;
	sumOrder += 9;
	console.log(sumOrder);
	arcade.style.borderColor = 'darkblue';
});
advanced.addEventListener('click', () => {
	sumOrder += 12;
	summary.innerHTML = `Advanced<div class="numberSummary">${prizeSecond.textContent}</div>`;
	selectedPlan = 'Advanced';
	advanced.style.borderColor = 'darkblue';
});
pro.addEventListener('click', () => {
	sumOrder += 15;
	summary.innerHTML = `Pro<div class="numberSummary">${prizeThird.textContent}</div>`;
	selectedPlan = 'pro';
	pro.style.borderColor = 'darkblue';
});

switcher.addEventListener('click', () => {
	if (switcher.checked === true) {
		yearlyOrMonthly = 'year';
	} else {
		yearlyOrMonthly = 'month';
	}
	total.innerHTML = `Total(per ${yearlyOrMonthly})`;
});

// summaryTotal.innerHTML = `<div class="totalNumber">${result.textContent}</div>`;

// step 3

option1.addEventListener('click', (e) => {
	if (e.target !== inputOption1) {
		console.log(sumOrder);
		sumOrder += 1;
		inputOption1.checked = !inputOption1.checked;
		service.style.display = 'flex';
	}
	service.innerHTML = `Online service<div class="numberServiceS"> ${prizeOfServices1.textContent}</div> `;
});

option2.addEventListener('click', (e) => {
	sumOrder += 2;
	if (e.target !== inputOption2) {
		inputOption2.checked = !inputOption2.checked;
		largerStorage.style.display = 'flex';
	}
	largerStorage.innerHTML = `Larger storage<div class="numberService2"> ${prizeOfServices2.textContent}</div> `;
});

option3.addEventListener('click', (e) => {
	sumOrder += 2;
	if (e.target !== inputOption3) {
		inputOption3.checked = !inputOption3.checked;
		customizable.style.display = 'flex';
	}
	customizable.innerHTML = `Customizable<div class="numberService3"> ${prizeOfServices3.textContent}</div> `;
});

// total

let counter = 0;

const checkView = (value) => {
	if (value == 0) {
		back.style.display = 'none';
		view0.style.display = 'flex';
		view1.style.display = 'none';
		view2.style.display = 'none';
		view3.style.display = 'none';
		next.style.display = 'block';
		numberOne.style.backgroundColor = 'blue';
		numberSecond.style.backgroundColor = 'transparent';
		numberThree.style.backgroundColor = 'transparent';
		numberFour.style.backgroundColor = 'transparent';
	} else if (value == 1) {
		back.style.display = 'block';
		view0.style.display = 'none';
		view1.style.display = 'flex';
		view2.style.display = 'none';
		view3.style.display = 'none';
		next.style.display = 'block';
		numberOne.style.backgroundColor = 'transparent';
		numberSecond.style.backgroundColor = 'blue';
	} else if (value == 2) {
		back.style.display = 'block';
		view0.style.display = 'none';
		view1.style.display = 'none';
		view2.style.display = 'flex';
		view3.style.display = 'none';
		next.style.display = 'block';
		numberOne.style.backgroundColor = 'transparent';
		numberSecond.style.backgroundColor = 'transparent';
		numberThree.style.backgroundColor = 'blue';
	} else if (value == 3) {
		back.style.display = 'block';
		view0.style.display = 'none';
		view1.style.display = 'none';
		view2.style.display = 'none';
		view3.style.display = 'flex';
		next.style.display = 'none';
		numberFour.style.backgroundColor = 'blue';
		numberOne.style.backgroundColor = 'transparent';
		numberSecond.style.backgroundColor = 'transparent';
		numberThree.style.backgroundColor = 'transparent';

		summaryTotal.innerHTML = sumOrder;
	}
};
checkView(0);

next.addEventListener('click', () => {
	counter++;
	checkView(counter);
});

back.addEventListener('click', () => {
	counter--;
	checkView(counter);
});
