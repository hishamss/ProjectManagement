import React from 'react';
import Board from './components/Board';
import Card from './components/Card';
import Form from './components/addNewCard';


function App() {
  return (
    <div className="App">
      <main className="flexbox">
     
  
        <Board id="board-1" className="Board">
          <Card id="card-1" className="Card" draggable="true">
            <p>card 1</p>
          </Card>
        </Board>

        <Board id="board-2" className="Board">
          <Card id="card-2" className="Card" draggable="true">
            <p>card 2</p>
          </Card>
        </Board>

        <Board id="board-3" className="Board">
          <Card id="card-3" className="Card" draggable="true">
            <p>card 2</p>
          </Card>
        </Board>

        <Board id="board-4" className="Board">
          <Card id="card-4" className="Card" draggable="true">
            <p>card 2</p>
          </Card>
        </Board>

        <Form></Form>

      </main>
    </div>
  );
}

export default App;
