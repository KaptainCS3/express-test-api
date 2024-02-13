import { useEffect, useState } from "react";

function App() {
  const url = "http://localhost:3000/url";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const req = await fetch(url);
    const res = await req.json();
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <>{data && data.map((el) => <p>{el}</p>)}</>;
}

export default App;
