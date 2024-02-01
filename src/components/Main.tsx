import { useState, useRef} from 'react';
import LeftContent from '../components/content/LeftContent.tsx'
import RightContent from '../components/content/RightContent.tsx'
import type { resumeType } from '@/type'
import { createPageSize } from './context.ts'
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
	const onGetContent = (ex: resumeType) => {
		console.log(ex.content, 'eeee')
	}
	return (
		<div ref={viewRef} className='font-MPLUSRounded1c flex justify-center flex-col items-start md:flex-row' onClickCapture={ ev => onMouseMoveMain(ev)}>
			<createPageSize.Provider value={PageSize}>
				<LeftContent GetContent={(ev) => onGetContent(ev)}/>
			</createPageSize.Provider>
			<RightContent />
		</div>
	)
}
