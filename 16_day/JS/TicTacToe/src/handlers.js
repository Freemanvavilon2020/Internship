import boardData from './modules/getconst';

let isFinall = false;

const handleVictory = () => {
	const infoArea = document.getElementById(`info`);
	isFinall = true;
	outerLoop: for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			if (boardData[i][j] === '') {
				isFinall = false;
				break outerLoop;
			}
		}
	}

	const isVictory = boardData[1][1] === boardData[2][2] && boardData[2][2] === boardData[3][3] && boardData[1][1] !== ''
		|| boardData[3][1] === boardData[2][2] && boardData[2][2] === boardData[1][3] && boardData[3][1] !== ''
		|| boardData[1][1] === boardData[1][2] && boardData[1][2] === boardData[1][3] && boardData[1][1] !== ''
		|| boardData[2][1] === boardData[2][2] && boardData[2][2] === boardData[2][3] && boardData[2][1] !== ''
		|| boardData[3][1] === boardData[3][2] && boardData[3][2] === boardData[3][3] && boardData[3][1] !== ''
		|| boardData[1][1] === boardData[2][1] && boardData[2][1] === boardData[3][1] && boardData[1][1] !== ''
		|| boardData[1][2] === boardData[2][2] && boardData[2][2] === boardData[3][2] && boardData[1][2] !== ''
		|| boardData[1][3] === boardData[2][3] && boardData[2][3] === boardData[3][3] && boardData[1][3] !== '';

	if (!isVictory && isFinall) {
		infoArea.innerHTML += 'Ничья<br/>';
		return false;
	}

	return isVictory;
}


const handleEnemyStep = () => {
	const infoArea = document.getElementById(`info`);
	outerLoop: for (let i = 1; i <= 3; i++) {
		if (!isFinall) {
			for (let j = 1; j <= 3; j++) {
				if (boardData[i][j] === '') {
					const field = document.getElementById(`field_${i}_${j}`);
					field.innerHTML = 'O';
					boardData[i][j] = 'O';
					if (handleVictory()) {
						infoArea.innerHTML += 'победил компьютер<br/>';
					}
					break outerLoop;
				}
			}
		}
	}
}

const handleClickField = (i, j) => {
	const field = document.getElementById(`field_${i}_${j}`);
	const infoArea = document.getElementById(`info`);

	if (!isFinall) {
		if (boardData[i][j] === '') {
			field.innerHTML = 'X';
			boardData[i][j] = 'X';

			if (handleVictory()) {
				infoArea.innerHTML += 'Поздравляю, вы победили!<br/>';
			} else {
				handleEnemyStep();
			}
		} else {
			infoArea.innerHTML += 'Эта клетка занята<br/>';
		}
	}
};

(function () {
	document.addEventListener("DOMContentLoaded", () => {
		const fields = document.getElementById('fields');

		for (let i = 1; i <= 3; i++) {
			const row = document.createElement('div');
			row.id = `row_${i}`;
			row.className = 'row'
			fields.append(row);

			for (let j = 1; j <= 3; j++) {
				const field = document.createElement('div');
				field.id = `field_${i}_${j}`;
				field.className = 'field'
				field.innerHTML = ''
				row.append(field);

				field.addEventListener('click', (event) => {
					handleClickField(i, j);
				})
			}
		}
	});
})();
