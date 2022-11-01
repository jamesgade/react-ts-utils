import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {

  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays</h3>
        <List people={people} />
        {people.length === 0 && <button onClick={() => setPeople(data)}>Refresh</button>}
        {people.length !== 0 && <button onClick={() => setPeople([])}>Clear All</button>}
      </section>
    </main>
  );
}

export default App;
