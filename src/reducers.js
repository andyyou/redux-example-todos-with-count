import {combineReducers} from 'redux'
import {ADD_TODO, COUNT_DOWN, COUNT_DOWN_DONE, COUNT_RESET, COUNT_DOWN_START} from './actions'



/**
 * 注意: action 除了 type 外，還要包含修改 state 所需要的資料
 * 這個資料可能是索引或者要加入的資料
 * 
 */
function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.todo
      ]
    default:
      return state
  }
}

const clockInitialState = {
  second: 5,
  minute: 0,
  runningType: 0 // 0: initial, 1: running, 2: done
}

function clock (state = clockInitialState, action) {
  let allSecond = state.minute * 60 + state.second
  let currentSecond = allSecond - 1
  let minute = Math.floor(currentSecond / 60);
  let second = currentSecond % 60
  let runningType = currentSecond === 0 ? 2 : 1;
  
  switch (action.type) {
    case COUNT_DOWN:
      return {
        ...state,
        minute: minute,
        second: second,
        runningType: runningType
      }
    case COUNT_DOWN_DONE:
      return {
        ...state,
        runningType: 2
      }
    case COUNT_RESET:
      return clockInitialState
    default:
      return state
  }
}

/**
 * root reducer 就是決定 state 屬性的地方
 */
const rootReducer = combineReducers({
  // 這邊等於 state 規劃的 property
  todos,
  clock
})

export default rootReducer