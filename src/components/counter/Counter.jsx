import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(5);

	return (
		<>
			<span>{counter}</span>
			<button onClick={() => increment(counter, setCounter)}>click +1</button>
			<button onClick={() => restart(counter, setCounter)}>restart</button>
			<button onClick={() => decrement(counter, setCounter)}>decrement</button>
		</>
	);
};

const increment = (counter, setCounter) => {
	setCounter(counter + 1);
};
const restart = (counter, setCounter) => {
	setCounter(0);
};
const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
};

export default Counter;
