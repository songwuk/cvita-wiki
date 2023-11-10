import MarkdownPreview from "../MarkdownPreview";
import './RightContent.css'
export default function RightContent() {
	const line = '# 1.More Time\n## 2.更多时间\n### 没有时间'
  return (
		<>
			<div className="w-full bg-gray-700">
				<MarkdownPreview markdown={line}/>
      </div>
		</>
	);
}
