import data from "./data"
import Question from "./Question";

const App = () => {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {
            data.map((question) => (
              <Question key={question.id} {...question} />
            ))
          }
        </section>
      </div>
    </main>
  );
}

export default App;
