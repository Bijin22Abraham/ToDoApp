import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [error, setError] = useState(''); // State to handle the error message

  const addToDo = () => {
    if (!toDo.trim()) { // Check if the input is not just spaces
      setError('Please enter a to-do item.'); // Set error if input is empty or only spaces
      return;
    }
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false, createdAt: new Date() }]);
    setToDo(""); // Clear the input field after adding a to-do
    setError(''); // Clear the error message if addition is successful
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, Today I have many works 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={addToDo}
          className="fas fa-plus"
        ></i>
        {error && <div style={{color: 'red'}}>{error}</div>} {/* Show error message in red */}
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    })
                  );
                }}
                checked={obj.status}
                type="checkbox"
              />
              <p>
                {obj.text} {/* Display the to-do text */}
                <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '5px' }}>
                  [{obj.createdAt.toLocaleString()}] {/* Display the creation date and time */}
                </span>
              </p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => setToDos(toDos.filter(toDo => toDo.id !== obj.id))}></i>
            </div>
          </div>
        ))}

        {toDos.map((obj) => {
          if (obj.status) {
            return <h1 key={obj.id}>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
