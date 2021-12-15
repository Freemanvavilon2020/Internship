import React from 'react';
import PropTypes from 'prop-types';


function Field1(props) {
	let {i, j, content, onClick} = props;

	return (
		<div
			className="field field1"
			onClick={() => onClick(i, j)}
		>
			{content}
		</div>
	)
}

Field1.propTypes = {
	i: PropTypes.number,
	j: PropTypes.number,
	content: PropTypes.string,
	onClick: PropTypes.func,
};

Field1.defaultProps = {
	onClick: () => {},
};

export default Field1
