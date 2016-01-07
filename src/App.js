import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo, runCountDown, countReset} from './actions'

class App extends Component {
  render() {
    var {dispatch, todos, clock } = this.props;
    console.log(clock)
    return (
      <div>
        <div>
          {`${clock.minute}:${clock.second}`}
        </div>
        <button onClick={(e) => dispatch(runCountDown())}>
          Countdown
        </button>
        <button onClick={(e) => dispatch(countReset())}>
          Reset
        </button>
        <input type='text' ref='input'/>
        <button onClick={(e) => dispatch(addTodo(this.refs.input.value))}>
          Add
        </button>
        <ul>
        {
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
        </ul>
      </div>
    );
  }
}

function select (state) {
  return state;
}

export default connect(select)(App);