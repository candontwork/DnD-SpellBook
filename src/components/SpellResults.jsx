import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SpellResults({ showSpells }) {
  console.log("this is", showSpells);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
    <div>
      {showSpells.map((spell) => (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {spell.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>
                  <b>Spell Type:</b> {spell.level}
                </p>
                <p>
                  <b>Range:</b> {spell.range}
                </p>
                <p>
                  <b>Ritual:</b> {spell.ritual}
                </p>
                <p>
                  <b>Duration:</b> {spell.duration}
                </p>
                <p>
                  <b>Concentration:</b> {spell.concentration}
                </p>
                <p>
                  <b>Casting Time:</b> {spell.casting_time}
                </p>
                <p>
                  <b>Class:</b> {spell.dnd_class}
                </p>
                <p>
                  <b>Archtype:</b> {spell.archetype}
                </p>
                <p>
                  <b>On Higher Levels:</b> {spell.higher_level}
                </p>
                <p>
                  <b>PHB:</b> {spell.page}
                </p>
              </Typography>
            </Box>
          </Modal>
          <div className = 'Box' >
            <a onClick={handleOpen}>
              <p>
                <h1>{spell.name}</h1>
              </p>
            </a>
            <p>{spell.desc}</p>

            <p>
              <button onClick={() => addToSpellBook(spell)}>
                {" "}
                Add to Spellbook{" "}
              </button>
            </p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default SpellResults;
