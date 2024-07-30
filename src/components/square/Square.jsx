import { useState } from 'react';
import { StyledSquare } from './style';

const Square = () => {
	const [isGreen, setIsGreen] = useState(true);
	console.log(isGreen);
	return (
		<>
			<StyledSquare $newColor={isGreen} />
			<button onClick={() => changeColor(isGreen, setIsGreen)}>click me</button>
		</>
	);
};

const changeColor = (isGreen, setIsGreen) => {
	setIsGreen(!isGreen);
};
export default Square;
