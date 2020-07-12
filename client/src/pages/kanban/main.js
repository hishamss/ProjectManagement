import React from "react";
import Homepage from "./Homepage";
import Header from "./header";
import { DndProvider } from "react-dnd";
import Backend, { HTML5Backend } from "react-dnd-html5-backend";

const Main = ({ Name, LocalId, id, title, isclicked, PM, Users, Messages }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <Header /> */}
      <Homepage
        Name={Name}
        LocalId={LocalId}
        id={id}
        title={title}
        isclicked={isclicked}
        PM={PM}
        Users={Users}
        Messages={Messages}
      />
    </DndProvider>
  );
};

export default Main;
