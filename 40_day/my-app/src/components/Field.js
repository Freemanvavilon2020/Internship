import React from 'react';
import PropTypes from 'prop-types';


function Field(props) {
	let {i, j, content, onClick} = props;

	return (
		<div
			className="field"
			onClick={() => onClick(i, j)}
		>
			{content}
		</div>
	)
}

Field.propTypes = {
	i: PropTypes.number,
	j: PropTypes.number,
	content: PropTypes.string,
	onClick: PropTypes.func,
};

Field.defaultProps = {
	onClick: () => {},
};

export default Field
