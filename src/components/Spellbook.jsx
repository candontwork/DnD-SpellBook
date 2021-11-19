import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";

import './Spellbook.css'

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

function SpellBook() {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [open, setOpen] = useState(false);

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

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <h3>spell book</h3>
      {localStorageData.map((data) => (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {data.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>
                  <b>Spell Type:</b> {data.level}
                </p>
                <p>
                  <b>Range:</b> {data.range}
                </p>
                <p>
                  <b>Ritual:</b> {data.ritual}
                </p>
                <p>
                  <b>Duration:</b> {data.duration}
                </p>
                <p>
                  <b>Concentration:</b> {data.concentration}
                </p>
                <p>
                  <b>Casting Time:</b> {data.casting_time}
                </p>
                <p>
                  <b>Class:</b> {data.dnd_class}
                </p>
                <p>
                  <b>Archtype:</b> {data.archetype}
                </p>
                <p>
                  <b>On Higher Levels:</b> {data.higher_level}
                </p>
                <p>
                  <b>PHB:</b> {data.page}
                </p>
              </Typography>
            </Box>
          </Modal>

          <a onClick={handleOpen}>
            <h4>{data.name}</h4>
          </a>
          <p>{data.desc}</p>
        </div>
      ))}
    </>
  );
}

export default SpellBook;
