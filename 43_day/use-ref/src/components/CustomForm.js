import React, { useRef } from "react";

export default function CustomForm() {
	const inputRef1 = useRef(null)

	const focus = () => {
		inputRef1.current.focus()
		inputRef1.current.style.backgroundColor = 'black'
	}

	return (
		<>
			<input ref={inputRef1} />
			<button onClick={focus}>Focus</button>
		</>
	)
}
