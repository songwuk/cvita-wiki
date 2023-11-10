import { Remarkable } from 'remarkable';
import './Mian.css'
const md = new Remarkable();
export default function MarkdownPreview(
  { markdown }
  : {
    markdown: string
  }) {
  const renderedHTML = md.render(markdown);
  return <div dangerouslySetInnerHTML={{__html: renderedHTML}} />;
}
