import React, { useState } from "react";
import Modal from "react-modal";
import API from "../../utils/API";
Modal.setAppElement("#app");

const Window = ({
  show,
  onClose,
  item,
  isNew,
  status,
  setItems,
  items,
  Name,
  Users,
  ProjectID,
}) => {
  const [content, setContent] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const handleSubmit = () => {
    console.log("sdfsdafsdfdasfs", content, assignedTo);
    API.addIssue({
      status: "open",
      assignedTo: assignedTo,
      content: content,
      ProjectId: ProjectID,
    }).then(() => {
      const cardNum = items.length + 1;
      const newItem = {
        id: cardNum,
        icon: "⭕️",
        status: "open",
        assignedTo: assignedTo,
        content: content,
      };
      setItems([...items, newItem]);
      onClose();
    });
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
          <h1 style={{ flex: "1 90%" }}>New Issue</h1>
          <button className={"close-btn"} onClick={onClose}>
            X
          </button>
        </div>

        <div>
          <input
            className="descriptionInput"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Title"
          />
          <br />
          <div className="form-group" style={{ marginBottom: 0 }}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text">Assign To</label>
              </div>

              <select
                value={assignedTo}
                className="custom-select"
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option value={Name}>Assign yourself</option>
                {Users.map((user, i) => {
                  return (
                    <option key={i} value={user.User.name}>
                      {user.User.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* <h2>Status</h2>
          <p>
            {status}
            
          </p> */}
          <button
            className="submit btn btn-primary"
            onClick={handleSubmit}
            style={{ background: "#4bb3fd" }}
          >
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
