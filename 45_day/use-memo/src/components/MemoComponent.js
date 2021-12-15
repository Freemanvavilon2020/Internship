import React, {useState, useMemo} from 'react';

const sum = n => {
	console.log('--- sum ---')
	return n + n
};

const MemoComponent = () => {
	const [num, setNum] = useState(1);
	const [isGreen, setIsGreen] = useState(true);
	const result = useMemo(() => sum(num), [num]);
	// const result = sum(num);

	return (
		<div>
			<h1 onClick={() => setIsGreen(!isGreen)}
					style={{ color: isGreen ? "green" : "red" }}
			>
				Click me!
			</h1>
			<h2>
				Sum {result}
			</h2>
			<button onClick={() => setNum(num + 1)}>➕</button>
		</div>
	);
};
export default MemoComponent;
