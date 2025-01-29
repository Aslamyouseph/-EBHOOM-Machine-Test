import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios"; //This us used to connect the frontend to the backend

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from Node.js server
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>data: {data}</h1>
    </div>
  );
}

export default App;
