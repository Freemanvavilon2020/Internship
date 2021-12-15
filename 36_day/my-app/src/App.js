import React from 'react';
import './App.css';
import Field from './components/Field'

function App() {
  const arr3 = [1, 2, 3];

  return (
    <div className="App">
      <div
        id="board"
        className="board"
      >
        <div
          id="fields"
          className="fields"
        >
          {arr3.map(num => (
            <div
              id={`row_${num}`}
              className='row'
            >
              {
                arr3.map(fieldNum => (
                  <Field
                    i={num}
                    j={fieldNum}
                    content={`${num} x ${fieldNum}`}
                  />
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
