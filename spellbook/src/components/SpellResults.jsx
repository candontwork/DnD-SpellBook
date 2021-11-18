import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SpellResults({ showSpells }) {
  console.log("this is", showSpells);
  const [modalShow, setModalShow] = React.useState(false);

  function onClickHandler() {
    setModalShow(true);
  }

  function onCloseHandler() {
    setModalShow(false);
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
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {spell.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onCloseHandler}>Close</Button>
            </Modal.Footer>
          </Modal>

          <a onClick={onClickHandler}>
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
      ))}
    </div>
  );
}

export default SpellResults;
