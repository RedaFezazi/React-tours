import { useEffect, useState } from "react";
import Card from "./components/cards";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchingData = async () => {
      setData(await (await fetch(url)).json());
    };
    fetchingData();
  }, []);

  const filterData = (id) => {
    setData(data.filter((tour) => tour.id !== id));
  };

  return (
    <>
      <h2>Our Tours</h2>
      {data && data.length === 0 ? (
        <button onClick={async () => setData(await (await fetch(url)).json())}>
          Refresh
        </button>
      ) : null}
      <main>
        {data &&
          data.map((tour) => (
            <Card key={tour.id} {...{ ...tour, filterData }} />
          ))}
      </main>
    </>
  );
};
export default App;
