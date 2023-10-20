import { useState, useRef, useEffect } from 'react'
import './LeftContent.css'
/**
 * 空格 文字 特殊符号
 * @returns 
 */
export default function LeftContent(
  PageSize: {
    pageX: number,
    pageY: number
  }
){
  const inputedRef = useRef<HTMLTextAreaElement>(null)
  const [TextareaStyle, setTextareaStyle] = useState({
    left: '-100px',
    top: '-100px',
  })
  const addContext = (value: string) => {
    const textSpan = document.createElement('span')
    textSpan.innerHTML = value
  }
  const onChangeTextBlock = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = ev.target
    addContext(target.value)
    console.log(target.value)
  }
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      // 在这里处理键盘事件的逻辑
      if(event.key === 'ArrowUp'){
        console.log('up')
      }else if(event.key === 'ArrowDown'){
        console.log('down')
      }
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // 注意空数组作为依赖，确保只在组件挂载和卸载时添加和移除事件处理程序
  const acrossPx = () => {
      // 
  }
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
      // const 
      setTextareaStyle({
        top: String(currentParentNode.offsetTop) + 'px',
        left: String(PageSize.pageX) + 'px',
      })
    }
    inputedRef.current?.focus() // focus
    children[index]?.classList.add('view-line-hover')
  }
  const itemsList = ['# 1.More Time', '## 2.你需要非常多时间', 'String3text', 'String4bigworld', 'String5'];
  return (
		<>
			<div className="border w-full border-black dark:border-white relative h-[909px]">
        <div className='view-lines' onClick={ev => onClickText(ev)}>
          {
            itemsList.map((item, index) => {
              return (
                <div key={index} className='view-line'>
                  <span>
                    <span>{item}</span>
                  </span>
                </div>
              )
            })
          }
        </div>
        <textarea autoFocus ref={inputedRef} onChange={ev => onChangeTextBlock(ev)} className={` outline-none dark:bg-gray-400 resize-none w-[1px] h-[var(--set-base-height)] absolute left-0 top-0`} style={TextareaStyle} />
      </div>
		</>
	);
}
