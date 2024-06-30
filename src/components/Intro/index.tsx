import { HighlightedText } from "../HighlightedText";

export function Intro() {
  return (
    <section className="intro">
      <p>I'm a software developer based in Buenos Aires, Argentina.</p>
      <p>Lately I've specialized on frontend with full stack capabilities.</p>
      <p>I'm focused on <HighlightedText text="product companies" />, I truly care about our <HighlightedText text="customers" />, ensuring <HighlightedText text="solutions meet their needs" /> and <HighlightedText text="exceed expectations"/>.</p>
    </section>
  );
}