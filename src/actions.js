// Action Type
export const ADD_TODO = 'ADD_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export const COUNT_DOWN = 'COUNT_DOWN'
export const COUNT_DOWN_DONE = 'COUNT_DOWN_DONE'
export const COUNT_RESET = 'COUNT_RESET'

export function countDown() {
  return {
    type: COUNT_DOWN
  }
}

export function countDownDone() {
  return {
    type: COUNT_DOWN_DONE
  }
}

export function countReset() {
  return {
    type: COUNT_RESET
  }
}

// thunk
export function runCountDown() {
  return (dispatch, getState) => {
    let p = new Promise(function(resolve, reject) {
      let timer = setInterval(() => {
        console.log('!!');
        let { clock } = getState()
        if (clock.runningType === 2) {
          clearInterval(timer)
          resolve()
        } else {
          dispatch(countDown())
        }
      }, 1000)
    })
    return p.then(() => dispatch(addTodo('A')))
            .then(() => dispatch(addTodo('B')))
  }
}