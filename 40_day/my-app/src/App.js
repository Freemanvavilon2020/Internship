import React, {Component} from 'react';
import _ from 'lodash';

import Field from './components/Field'
import Field1 from './components/Field1'
import Field2 from './components/Field2'

import './App.css';

const arr3 = [1, 2, 3];

class App extends Component{
  constructor(props) {
    super(props);

    console.log('constructor');

    this.clickCount = 0;

    this.state = {
      boardData: [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
      ],
      // loading: true,
    };
    // this.handleClickField = this.handleClickField.bind(this);
  }

  async componentDidMount() {
    console.log('componentDidMount')

    // ...Load data...
    this.setState({
      // ...new data
      loading: false,
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')

    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')

  }

  // handleClickField(i, j) {
  //   const {boardData} = this.state;
  //   boardData[i][j] = 'X';
  //   this.setState({
  //     boardData: _.cloneDeep(boardData),
  //   });
  // }

  handleClickField = (i, j) => {
    const {boardData} = this.state;
    boardData[i][j] = 'X';
    this.setState({
      boardData: _.cloneDeep(boardData),
    });

    // this.state.boardData = _.cloneDeep(boardData); // Не работает
  };

  render() {
    console.log('render')

    const {boardData, loading} = this.state;

    return loading
      ? 'loading...'
      : (
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
                      <>
                        {fieldNum % 3 === 0 &&
                        <Field
                          key={`field_${num}_${fieldNum}`}
                          i={num}
                          j={fieldNum}
                          content={boardData[num][fieldNum]}
                          onClick={this.handleClickField}
                        />
                        }
                        {fieldNum % 3 === 1 &&
                        <Field1
                          key={`field1_${num}_${fieldNum}`}
                          i={num}
                          j={fieldNum}
                          content={boardData[num][fieldNum]}
                          onClick={this.handleClickField}
                        />
                        }
                        {fieldNum % 3 === 2 &&
                        <Field2
                          key={`field2_${num}_${fieldNum}`}
                          i={num}
                          j={fieldNum}
                          content={boardData[num][fieldNum]}
                          onClick={this.handleClickField}
                        />
                        }
                        {/*{*/}
                        {/*   fieldNum % 2*/}
                        {/*     ? (*/}
                        {/*       <Field*/}
                        {/*         key={`field_${num}_${fieldNum}`}*/}
                        {/*         i={num}*/}
                        {/*         j={fieldNum}*/}
                        {/*         content={boardData[num][fieldNum]}*/}
                        {/*         onClick={handleClickField}*/}
                        {/*       />)*/}
                        {/*     : (<Field1*/}
                        {/*       key={`field_${num}_${fieldNum}`}*/}
                        {/*       i={num}*/}
                        {/*       j={fieldNum}*/}
                        {/*       content={boardData[num][fieldNum]}*/}
                        {/*       onClick={handleClickField}*/}
                        {/*     />)*/}
                        {/* }*/}
                      </>
                    )
                  )
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
