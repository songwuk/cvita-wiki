import { useState, useRef} from 'react';
import LeftContent from '../components/content/LeftContent.tsx'
// import RightContent from '../components/content/RightContent.tsx'

import './Mian.css';
export default function Main() {
	const [PageSize, setPageSize] = useState({
		pageX: 0,
		pageY: 0,
	})
	const viewRef = useRef<HTMLDivElement>(null)
	const onMouseMoveMain = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const domRect = viewRef.current?.getBoundingClientRect()
		const { pageX, pageY  } = ev
		const top = domRect?.top ?? 0;
		setPageSize({
			pageX,
			pageY: (pageY- top),
		})
	}
	return (
		<div ref={viewRef} className='flex mt-1 justify-left items-center' onClickCapture={ ev => onMouseMoveMain(ev)}>
			<LeftContent {...PageSize}/>
			{/* <RightContent /> */}
		</div>
	)
}
