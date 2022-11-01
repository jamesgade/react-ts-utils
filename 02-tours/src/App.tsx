import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { TourProps } from "./interface/TourProps";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<TourProps[]>([]);

  const deleteTour = (id: number) => {
    const newTours = tours.filter((tour: TourProps) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setTours(data);
      })
      .catch(err => {
        setLoading(false);
        console.warn("fetch failed", err)
      });
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <main><Loading /></main>
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button onClick={fetchTours} className="btn">Refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
