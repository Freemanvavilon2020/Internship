function *range(first, last, step) {
	for (let i = first; i <= last; i += step) {
		yield i;
	}
}

function *getDeck() {
	const deck = [...range(1, 52, 1)].map(el => el + '');
	while (deck.length > 0) {
		yield deck.splice(deck[Math.floor(Math.random() * deck.length)], 1)[0];
	}
}

const deck1 = getDeck()
deck1.next()

function* getCounter() {
	let count = 0;
	while (true) {
		yield count++;
	}
}

const arr = [...range(1, 100, 14)]
