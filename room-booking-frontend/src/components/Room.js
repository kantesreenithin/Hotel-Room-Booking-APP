import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./Room.css";
function Room({ room, fromdate, todate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow=()=>setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img
          src={room.imageurls[0]}
          width="100%"
          height="200px"
          alt={room.name}
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div className="col-md-7">
        <h5>{room.name}</h5>
        <b>
          {" "}
          <p>Max Count : {room.maxcount}</p>
          <p>phone Number :{room.phonenumber}</p>
          <p>Type :{room.type}</p>
        </b>
        <div style={{ float: "right" }}>
          {(fromdate && todate) && (
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Room;
