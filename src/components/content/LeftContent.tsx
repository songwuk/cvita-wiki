import { useState, useRef, useEffect, useContext } from 'react'
import type { resumeType } from '@/type'
import { myCaretRangeFromPoint } from '@/constants/index'
import { createPageSize } from '../context.ts'
import './LeftContent.css'
import { wh1, wh2, wh3, wh4, wh5, wh6} from '@/common.ts'
// codePointAt
export default function LeftContent(
{
  GetContent
}: {GetContent: (ev: resumeType) => void}){
  const PageSize = useContext(createPageSize);
  const inputedRef = useRef<HTMLTextAreaElement>(null)
  const [TextareaStyle, setTextareaStyle] = useState(
    () => {
      return {
        left: '-100px',
        top: '-100px',
      }
    }
  )
  const [postContent, setPostContent] = useState('');

  const addContext = (value: string) => {
    const textSpan = document.createElement('span')
    textSpan?.classList.add('next-span')
    textSpan.innerHTML = value
    return textSpan
  }
  /**
   * 判断当前是否是有效的长句
   */
  const isLongSatement = () => {

  }
  const onChangeTextBlock = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const isLong = isLongSatement()
    const target = ev.target
    const textSpan = addContext(target.value)
    inputedRef.current?.appendChild(textSpan)
    console.log(target.value)
    GetContent({content: target.value})
  }
  const handleMoveTextBlock = (isArrow: string | null) => {
    console.log(isArrow, 'isArrow')
  }
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      // 在这里处理键盘事件的逻辑
      let arrowHead = null
      if(event.key === 'ArrowUp'){
        arrowHead = 'up'
      }else if(event.key === 'ArrowDown'){
        arrowHead = 'down'
      } else if(event.key === 'Enter') {
        arrowHead = 'enter'
      }
      handleMoveTextBlock(arrowHead)
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // 注意空数组作为依赖，确保只在组件挂载和卸载时添加和移除事件处理程序
  /**
   * 
   * @param target 
   * @returns 
   */
  const searchDiv = (target: HTMLElement): HTMLElement => {
    if(target.tagName === "SPAN"){
      const targetNode = target.parentNode as HTMLElement
      return searchDiv(targetNode)
    }
    return target
  }
  /**
   * example https://developer.mozilla.org/en-US/docs/Web/API/Document/caretPositionFromPoint
   */
  const insertBreakAtPoint = (e: React.MouseEvent<HTMLElement>) => {
    // myCaretRangeFromPoint(x,y)
    let range;
    let textNode;
    let offset;
    if (document?.caretRangeFromPoint) {  // standard (WebKit)
      // Use WebKit-proprietary fallback method
      range = document.caretRangeFromPoint(e.pageX, e.pageY);
      textNode = range!.startContainer as Text | null;
      offset = range!.startOffset;
    }
    if (textNode && textNode.nodeType === 3) {
      let replacement = textNode?.splitText(offset || 0);
      // console.log(offset, replacement, textNode)
      // let br = document.createElement("br");
      // textNode.parentNode?.insertBefore(br, replacement);
    }
  }
  const onClickText = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement as any;
    const currentParentNode = searchDiv(target)
    const children = event.currentTarget.children;
    const index = Array.from(children).indexOf(currentParentNode);
    const currrentTarget = event.currentTarget as HTMLElement;
    const childNodesEvent = (currrentTarget.childNodes) as NodeListOf<HTMLElement>;
    for (const key in childNodesEvent) {
      if (Object.prototype.hasOwnProperty.call(childNodesEvent, key)) {
        childNodesEvent[key]?.classList.remove('view-line-hover')
      }
    }
    // 当前点击的是div
    if(target.nodeName === 'DIV' && !target.className.includes('view-lines')){
      const offsetWidth = target.childNodes[0] as HTMLElement // 获取当前(line-px)
      const pageX = offsetWidth.offsetWidth
      setTextareaStyle({
        top: String(target.offsetTop) + 'px',
        left: String(pageX) + 'px',
      })
    } else if(target.nodeName === 'SPAN') { // 当前点击是span
      /**
       * 当点击当到当前的数据时，对比当前鼠标是否在数据之中
       */
      const topPx = currentParentNode.offsetTop
      const leftPx = PageSize.pageX
      // 加上当前的偏移位置
      setTextareaStyle({
        top: topPx + 'px',
        left: leftPx + 'px',
      })
    }
    // insertBreakAtPoint(event)
    inputedRef.current?.focus() // FOCUS
    children[index]?.classList.add('view-line-hover')
  }
  const itemsList = ['# 1.More Time', '## 2.更多时间', '### 3.没有时间', '### 4.计划'];
  return (
		<>
			<div className="border w-full border-black dark:border-white relative h-[909px] opacity-[0.7]">
        <span className='flex w-[30px] h-[30px] absolute right-0 top-0 opacity-[0.5]' style={{backgroundColor: 'gray',  borderBottomLeftRadius: '5px', textAlign: 'center'}}>.md</span>
        <div className='view-lines' onClick={ev => onClickText(ev)}>
          {
            itemsList.map((item, index) => {
              return (
                <div key={index} className='view-line cursor-text'>
                  <span>
                  {
                    item.split('').map((n,i) => {
                      // based on UTF-16 code units
                      return (<span key={i}>{n}</span>)
                    })
                  }
                  </span>
                </div>
              )
            })
          }
        </div>
        <textarea value={postContent}  autoFocus ref={inputedRef} onChange={ev => onChangeTextBlock(ev)} className={` outline-none dark:bg-gray-400 resize-none w-[1px] h-[var(--set-base-height)] absolute left-0 top-0`} style={TextareaStyle} />
      </div>
		</>
	);
}
