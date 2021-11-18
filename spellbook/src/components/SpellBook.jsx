import React, { useState, useEffect } from "react";

function SpellBook() {
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const data = localStorage.getItem("MyBooks");
    const parsedData = JSON.parse(data);
    setLocalStorageData(()=>[...parsedData]);
    console.log(parsedData);
    console.log(localStorageData);
  }

  return (
    <>
      <h3>spell book</h3>
      <div>
          {localStorageData.map((data) => (
              <h1>{data.name}</h1>
          ))}
      </div>
    </>
  );
}

export default SpellBook;
