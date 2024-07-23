import { useState } from 'react';
import { StyledSquare } from './style';

const Square = () => {
	const [color, setColor] = useState('red');
	console.log(color);
	return (
		<>
			<StyledSquare $newColor={color} />
			<button onClick={() => changeColor(setColor)}>click me</button>
		</>
	);
};

const changeColor = setColor => {
	setColor('green');
};
export default Square;
