import { useState } from "react";
import data from "./data";

const App = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let amount = +count; // parse to number

    if (count <= 0) {
      amount = 1
    }
    if (count > data.length - 1) {
      amount = data.length
    }

    setText(data.slice(0, amount)); // end value not included in slice
  }

  return (
    <section className="section-center">
      <h3>tired of boring loram ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e: any) => setCount(e.target.value)} />
        <button className="btn" type="submit">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
