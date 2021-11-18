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
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>{spell.casting_time}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onCloseHandler}>Close</Button>
            </Modal.Footer>
          </Modal>
          <a onClick={onClickHandler}>
            <h1>{spell.name}</h1>
          </a>

          <h3>{spell.desc}</h3>
          <button onClick={() => addToSpellBook(spell)}>
            {" "}
            Add to Spellbook{" "}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SpellResults;
