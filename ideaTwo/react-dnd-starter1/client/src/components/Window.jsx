import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Window = ({show, onClose, item, isNew, status, setItems, items}) => {
    const handleSubmit = () => {
        const newItem =  {id: 5,
        icon: "⭕️",
        status: "open",
        title: "hello",
        content: "test"}
        setItems([...items, newItem])
        onClose();
    }
    if (isNew){
        return(
            <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
                <div className={"close-btn-ctn"}>
                    <h1 style={{flex: "1 90%"}}>Add New Card</h1>
                    <button className={"close-btn"} onClick={onClose}>X</button>
                </div>
            
                <div>
                    <h2>Description</h2>
                    <p>Add New Description</p>
                    <input className="descriptionInput"/>
                    <h2>Status</h2>
                    <p>
                        {status}
                        {/* {item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`} */}
                    </p>
                    <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>

        </Modal>
        )
    }
    return(
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
                <div className={"close-btn-ctn"}>
                    <h1 style={{flex: "1 90%"}}>{item.title}</h1>
                    <button className={"close-btn"} onClick={onClose}>X</button>
                </div>
            
                <div>
                    <h2>Description</h2>
                    <p>{item.content}</p>
                    <h2>Status</h2>
                    <p>
                        {item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
                    </p>
                </div>

        </Modal>
    );
};

export default Window;