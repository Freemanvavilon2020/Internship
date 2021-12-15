import React from 'react';
import PropTypes from 'prop-types';


function Field2(props) {
	let {i, j, content, onClick} = props;

	return (
		<div
			className="field field2"
			onClick={() => onClick(i, j)}
		>
			{content}
		</div>
	)
}

Field2.propTypes = {
	i: PropTypes.number,
	j: PropTypes.number,
	content: PropTypes.string,
	onClick: PropTypes.func,
};

Field2.defaultProps = {
	onClick: () => {},
};

export default Field2
