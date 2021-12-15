const POSITIONS = [
	{
		left: 0,
		top: 0,
	},
	{
		left: 150,
		top: 0,
	},
	{
		left: 300,
		top: 0,
	},
	{
		left: 300,
		top: 150,
	},
	{
		left: 300,
		top: 300,
	},
	{
		left: 150,
		top: 300,
	},
	{
		left: 0,
		top: 300,
	},
	{
		left: 0,
		top: 150,
	},
];

(function () {
	document.addEventListener("DOMContentLoaded", () => {
		let withEventHandler = false;
		let pos = 0;

		const button = document.getElementById('event-button');
		// const innerBlock = document.getElementById('inner-block');
		const outerBlock = document.getElementById('outer-block');
		const innerBlock = document.createElement('div');
		innerBlock.className = 'inner-block';
		outerBlock.append(innerBlock);

		// const innerBlockClickHandler = (event) => {
		// 	pos = ++pos % 8;
		// 	innerBlock.style.top = `${POSITIONS[pos].top}px`;
		// 	innerBlock.style.left = `${POSITIONS[pos].left}px`;
		// };

		const outerBlockClickHandler = (event) => {
			if (event.target === innerBlock) {
				pos = ++pos % 8;
				event.target.style.top = `${POSITIONS[pos].top}px`;
				event.target.style.left = `${POSITIONS[pos].left}px`;
			}
		};


		button.addEventListener('click', () => {
			withEventHandler = !withEventHandler;
			button.innerHTML = withEventHandler
				? 'Remove Block'
				: 'Add Block';

			if (withEventHandler) {
				outerBlock.addEventListener('click', outerBlockClickHandler);
				// innerBlock.addEventListener('click', innerBlockClickHandler);
				innerBlock.style.display = 'block';
			}
			else {
				outerBlock.removeEventListener('click', outerBlockClickHandler);
				// innerBlock.removeEventListener('click', innerBlockClickHandler);
				innerBlock.style.display = 'none';
			}
		})
	});
})();
