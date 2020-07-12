import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Window = ({ show, onClose, item, isNew, status, setItems, items }) => {
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    const cardNum = items.length + 1;
    const newItem = {
      id: cardNum,
      icon: "⭕️",
      status: "open",
      title: "Card " + cardNum,
      content,
    };
    setItems([...items, newItem]);
    onClose();
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const deleteItem = () => {
    alert("DELETE!");
  };

  if (isNew) {
    return (
      <Modal
        isOpen={show}
        onRequestClose={onClose}
        className={"modal-new"}
        overlayClassName={"overlay"}
        // onDelete={this.deleteItem}
      >
        <div className={"close-btn-ctn"}>
          <h1 style={{ flex: "1 90%" }}>Add New Card</h1>
          <button className={"close-btn"} onClick={onClose}>
            X
          </button>
        </div>

        <div>
          <h2>Description</h2>
          <p>Add New Description</p>
          <input className="descriptionInput" onChange={handleChange} />
          <h2>Status</h2>
          <p>
            {status}
            {/* {item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`} */}
          </p>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Modal>
    );
  }
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal-new"}
      overlayClassName={"overlay"}
      onDelete={deleteItem}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
        <button className={"close-btn"} onClick={onClose}>
          X
        </button>
      </div>

      <div>
        <h2>Description</h2>
        <p>{item.content}</p>
        <h2>Status</h2>
        <p>
          {item.icon}{" "}
          {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
        </p>
      </div>

      <div className={"delete-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
        <button className={"delete-btn"} onClick={deleteItem}>
          Delete This Card
        </button>
      </div>
    </Modal>
  );
};

export default Window;
