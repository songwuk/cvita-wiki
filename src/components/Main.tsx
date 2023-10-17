import { useState } from 'react';
import './Mian.css';
export default function Main({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	// const [count, setCount] = useState(initialCount);
	// const add = () => setCount((i) => i + 1);
	// const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className='text-center mt-20 text-2xl'>See you soon!</div>
		</>
	);
}
