import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// api endpoint
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const updateTours = tours.filter((tourObj) => tourObj.id !== id);
    setTours(updateTours);
  };

  const fetchData = async () => {
    // this is a good syntax for fetching api
    setLoading(true);
    await fetch(url) // here I missed to use await so that whenever I tried to reload the page instead of showing the loading page it jumps of to the no tours section in the app
      .then((response) => response.json())
      .then((data) => setTours(data));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(tours);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left for now!!</h2>
          <button className="btn" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default App;
