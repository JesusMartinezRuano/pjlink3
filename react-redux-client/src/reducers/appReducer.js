// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddProyector: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_PROYECTOR':
          return {
            ...currentState,showAddProyector: !currentState.showAddProyector
          }


    default:
       return currentState;

  }
}

export default appReducer;
