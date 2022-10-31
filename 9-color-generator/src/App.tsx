import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = () => {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState<Values[]>(new Values('#309639').all(10));

  const handleSubmit = (e: any) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)

    } catch (error: any) {
      setError(true)
      console.error(error.message);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#309639" className={`${error && "error"}`} />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
          // hexColor={color.hex}
          />
        ))}
      </section>
    </>
  );
}

export default App;
