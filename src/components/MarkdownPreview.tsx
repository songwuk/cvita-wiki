import { Remarkable } from 'remarkable';
import './Mian.css'
export default function MarkdownPreview(
  { markdown }
  : {
    markdown: string
  }) {
  const md = new Remarkable();
  const renderedHTML = md.render(markdown);
  return <div dangerouslySetInnerHTML={{__html: renderedHTML}} />;
}
