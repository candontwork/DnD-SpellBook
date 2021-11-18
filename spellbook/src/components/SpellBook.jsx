import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SpellBook() {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

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

  function onClickHandler() {
    setModalShow(true);
  }

  function onCloseHandler() {
    setModalShow(false);
  }

  return (
    <>
      <h3>spell book</h3>
      {localStorageData.map((data) => (
        <div>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {data.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onCloseHandler}>Close</Button>
            </Modal.Footer>
          </Modal>

          <a onClick={onClickHandler}>
            <h4>{data.name}</h4>
          </a>
          <p>{data.desc}</p>
        </div>
      ))}
    </>
  );
}

export default SpellBook;
