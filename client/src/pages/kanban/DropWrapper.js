import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "./data/type";
import { statuses } from "./data";
import Window from "./Window";

const DropWrapper = ({
  onDrop,
  children,
  status,
  setItems,
  items,
  Name,
  Users,
  ProjectID,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    canDrop: (item, monitor) => {
      const itemIndex = statuses.findIndex((si) => si.status === item.status);
      const statusIndex = statuses.findIndex((si) => si.status === status);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  return (
    <div ref={drop} className={"drop-wrapper"}>
      {React.cloneElement(children, { isOver })}
      {status === "open" && <button onClick={onOpen}>+</button>}

      <Window
        isNew={true}
        setItems={setItems}
        items={items}
        status={status}
        onClose={onClose}
        show={show}
        Name={Name}
        Users={Users}
        ProjectID={ProjectID}
      />
    </div>
  );
};

export default DropWrapper;
