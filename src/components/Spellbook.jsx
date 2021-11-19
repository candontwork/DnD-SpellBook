import React, { useState, useEffect } from "react";

import CustomModal from "./CustomModal";

import "./Spellbook.css";

function SpellBook() {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const data = localStorage.getItem("MyBooks");
    const parsedData = JSON.parse(data);
    setLocalStorageData(() => [...parsedData]);
    console.log(parsedData);
    console.log(localStorageData);
  }

  function handleOpen(spell) {
    console.log("this is", spell);
    setSelectedSpell(spell);
    console.log("this is", selectedSpell);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setSelectedSpell(null);
  }

  return (
    <>
      <h3>YOUR SPELLBOOK</h3>
      {localStorageData.map((data, id) => (
        <div key={id}>
          <div className="Box" key={id}>
            <a onClick={() => handleOpen(data)}>
              <p>
                <h1>{data.name}</h1>
              </p>
            </a>
            <p>{data.desc}</p>
          </div>
        </div>
      ))}
      <CustomModal
        open={open}
        handleClose={handleClose}
        selectedSpell={selectedSpell}
      />
    </>
  );
}

export default SpellBook;
