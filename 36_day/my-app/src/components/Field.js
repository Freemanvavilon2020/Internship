import React from 'react';


function Field(props) {
	const {i, j, content, onClick} = props;

	return (
		<div
			id={`field_${i}_${j}`}
			className="field"
			onClick={() => onClick(i, j)}
		>
			{content}
		</div>
	)

}

export default Field
