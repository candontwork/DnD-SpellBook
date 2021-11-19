import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const CustomModal = (props) => {
    return (
        <div>
            <Modal 
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {props?.selectedSpell?.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>
                  <b>Spell Type:</b> {props?.selectedSpell?.level}
                </p>
                <p>
                  <b>Range:</b> {props?.selectedSpell?.range}
                </p>
                <p>
                  <b>Ritual:</b> {props?.selectedSpell?.ritual}
                </p>
                <p>
                  <b>Duration:</b> {props?.selectedSpell?.duration}
                </p>
                <p>
                  <b>Concentration:</b> {props?.selectedSpell?.concentration}
                </p>
                <p>
                  <b>Casting Time:</b> {props?.selectedSpell?.casting_time}
                </p>
                <p>
                  <b>Class:</b> {props?.selectedSpell?.dnd_class}
                </p>
                <p>
                  <b>Archtype:</b> {props?.selectedSpell?.archetype}
                </p>
                <p>
                  <b>On Higher Levels:</b> {props?.selectedSpell?.higher_level}
                </p>
                <p>
                  <b>PHB:</b> {props?.selectedSpell?.page}
                </p>
              </Typography>
            </Box>
          </Modal>
        </div>
    )
}

export default CustomModal
