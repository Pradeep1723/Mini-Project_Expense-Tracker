const ctx = document.getElementById('chart');

const config = {
	data: {
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
				],
				hoverOffset: 5,
				borderRadius: 10,
				spacing: 5,
			},
		],
	},
	options: {
		cutout: 135,
	},
};

new Chart(ctx, {
	type: 'doughnut',
	...config,
});

const labelData = [
	{
		type: 'Savings',
		color: 'rgb(255, 99, 132)',
		percentage: 20,
	},
	{
		type: 'Investment',
		color: 'rgb(54, 162, 235)',
		percentage: 40,
	},
	{
		type: 'Expense',
		color: 'rgb(255, 205, 86)',
		percentage: 60,
	},
];

const labelsContainer = document.querySelector('.labels');

labelData.map((data) => {
	const labelElement = document.createElement('div');
	labelElement.setAttribute('class', 'label-container');

	const bulletPoint = document.createElement('span');
	bulletPoint.setAttribute('class', 'bullet-point');
	bulletPoint.style.backgroundColor = data.color ?? '#f9c74f';

	const label = document.createElement('span');
	label.textContent = data.type ?? '';

	const percentage = document.createElement('span');
	percentage.textContent = `${data.percentage ?? 0}%`;
	percentage.classList.add('percentage');

	labelElement.appendChild(bulletPoint);
	labelElement.appendChild(label);
	labelElement.appendChild(percentage);

	labelsContainer.appendChild(labelElement);
});

const historyLabels = [
	{ name: 'Savings' },
	{ name: 'Investment' },
	{ name: 'Expense' },
];

const historyContainer = document.querySelector('.history-types');

historyLabels.forEach(data => {
	const historyElement = document.createElement('span');
	historyElement.setAttribute('class', 'history-element');

	const textNode = document.createTextNode(data.name);

	const icon = document.createElement('i');
	icon.setAttribute('class', 'fa-solid fa-trash');

	historyElement.appendChild(textNode);
	historyElement.appendChild(icon);

	historyContainer.appendChild(historyElement);
});