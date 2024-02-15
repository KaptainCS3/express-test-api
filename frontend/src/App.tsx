import { useEffect, useState } from "react";

function App() {
  const url = "https://express-test-api-06xj.onrender.com/url";
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    location: '',
  })

  const fetchData = async () => {
    const req = await fetch(url);
    const res = await req.json();
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

const handleChange = (e: { target: { name: string; value: string; }; }) => {
  const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
}

const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault()
  try {
    const req = await fetch('https://express-test-api-06xj.onrender.com/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    const res = await req.json()
    console.log(res)
    setUserData({
      name: '',
      age: '',
      location: ''
    })
  } catch (error) {
    console.error(error);
    
  }
}


  return <div>{data && data.map((el) => <p>{el}</p>)}
    <form action="" method="post">
      <input type="text" name="name" placeholder="Enter your name" value={userData.name} onChange={handleChange}/>
      <input type="number" name="age" placeholder="Enter your age" value={userData.age} onChange={handleChange}/>
      <input type="text" name="location" placeholder="Enter location" value={userData.location} onChange={handleChange}/>
    </form>
    <button type="submit" onClick={handleSubmit}>submit</button>
  </div>;
}

export default App;
