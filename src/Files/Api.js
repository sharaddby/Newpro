
import React, { useState, useEffect } from "react";
function App() {
  // const url = "https://complianceelite.com/api.php";
  // const url="https://complianceelite.com/api/liveconference.php";
  const url="http://192.168.1.110/apis/get-conference.php";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
       {data.map((dataObj, index) => {
            //  console.log(dataObj);
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.conferenceName}</p>
            </div>
           
          );
         
        })}
        
      </center>
    </div>
  );
}

export default App;


