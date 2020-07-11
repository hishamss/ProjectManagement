import React from "react";
import Homepage from "./Homepage";
import Header from "./header";
import { DndProvider } from "react-dnd";
import Backend, { HTML5Backend } from "react-dnd-html5-backend";

const Main = () => {
  return (
    <div id="app">
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Homepage />
      </DndProvider>
    </div>
  );
};

export default Main;
