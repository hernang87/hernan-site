import './style.css';

interface HighlightedTextProps {
  text: string;
}

export function HighlightedText({text}: HighlightedTextProps) {
  return <span className="highlight">{text}</span>
}