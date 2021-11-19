import React, { useState } from "react";

import { Redirect } from "react-router";
import CustomModal from "./CustomModal";
// import Button from "@mui/material/Button";

function SpellResults({ showSpells }) {
  console.log("this is", showSpells);
  const [open, setOpen] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(null);

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

  function addToSpellBook(spellSelected) {
    console.log("addToBook", spellSelected.name);
    const previousData = localStorage.getItem("MyBooks");
    const parsedPreviousData = previousData ? JSON.parse(previousData) : [];
    console.log(parsedPreviousData);
    const isSpellExist = () => {
      let spellFound = false;
      parsedPreviousData.find((spell) => {
        if (spell.name === spellSelected.name) {
          console.log("We Found the Spell", spell.name);
          alert("The Spell is already in your book");
          spellFound = true;
        }
      });
      return spellFound;
    };
    if (isSpellExist()) {
      //pass
    } else {
      localStorage.setItem(
        "MyBooks",
        JSON.stringify([spellSelected, ...parsedPreviousData])
      );
    }
  }

  return (
    <>
      {showSpells ? (
        <div className = 'result'>
          {showSpells.map((spell, id) => (
            <div  className="Box" key={id}>
              {/* <div key={id}> */}
                <a onClick={() => handleOpen(spell)}>
    
                    <h1 className= 'name'>{spell.name}</h1>
                </a>
                <p className = 'desc'>{spell.desc}</p>

                  <button onClick={() => addToSpellBook(spell)}>
                    {" "}
                    Add to Spellbook{" "}
                  </button>
              </div>
            // </div>
          ))}
          <CustomModal
            open={open}
            handleClose={handleClose}
            selectedSpell={selectedSpell}
          />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default SpellResults;
