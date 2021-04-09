import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetchTour();
  }, []);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTour = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.log("there is an error in fetching data");
    }
  };
  if (tours.length === 0) {
    return (
      <main className="title">
        <h2>No More Tour Plans</h2>
        <button onClick={() => fetchTour()} className="btn">
          Refresh
        </button>
      </main>
    );
  }
  if (loading) {
    return (
      <main className="title">
        <Loading />
      </main>
    );
  }

  return (
    <main className="title">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default App;
