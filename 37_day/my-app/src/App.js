import React, {useState} from 'react';
import _ from 'lodash';

import Field from './components/Field'

import './App.css';

function App() {
  const arr3 = [1, 2, 3];

  const [boardData, setBoardData] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ])

  const handleClickField = (i, j) => {
    boardData[i][j] = 'X';
    setBoardData(_.cloneDeep(boardData));

    // const field = document.getElementById(`field_${i}_${j}`);
    // const infoArea = document.getElementById(`info`);
    //
    // if (!isFinall) {
    //   if (boardData[i][j] === '') {
    //     field.innerHTML = 'X';
    //     boardData[i][j] = 'X';
    //
    //     if (handleVictory()) {
    //       infoArea.innerHTML += 'Поздравляю, вы победили!<br/>';
    //     } else {
    //       handleEnemyStep();
    //     }
    //   } else {
    //     infoArea.innerHTML += 'Эта клетка занята<br/>';
    //   }
    // }
  };

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
          {arr3.map((num) => (
            <div
              key={`row_${num}`}
              className='row'
            >
              {
                arr3.map(fieldNum => (
                  <Field
                    key={`field_${num}_${fieldNum}`}
                    i={num}
                    j={fieldNum}
                    content={boardData[num][fieldNum]}
                    onClick={handleClickField}
                    // onClick={() => handleClickField(num, fieldNum)}
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
