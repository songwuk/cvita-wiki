import MarkdownPreview from "../MarkdownPreview";
import './RightContent.css'
export default function RightContent() {
	const line = '# 1.More Time\n## 2.更多时间\n### 没有时间'
  return (
		<>
			<div className="w-full bg-gray-700 relative border border-black dark:border-white opacity-[0.7]">
				<span className='w-[30px] h-[30px]  block absolute right-0 top-0 opacity-[0.5]' style={{backgroundColor: 'gray',  borderBottomLeftRadius: '5px', textAlign: 'center'}}>.*</span>
				<MarkdownPreview markdown={line}/>
      </div>
		</>
	);
}
