// ./react-redux-client/src/actions/proyectorActions.js

const apiUrl = "/api/";

export const toggleAddProyector = () => {
  return {
    type: 'TOGGLE_ADD_PROYECTOR'
  }
}

export const addNewProyector = (proyector) => {console.log(proyector)
  return (dispatch) => {
    dispatch(addNewProyectorRequest(proyector));
    return fetch(apiUrl, {
      method:'post',
      body: proyector,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.proyector);
          dispatch(addNewProyectorRequestSuccess(data.proyector, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewProyectorRequestFailed(error))
        })
      }
    })
  }
}

export const addNewProyectorRequest = (proyector) => {
  return {
    type: 'ADD_NEW_PROYECTOR_REQUEST',
    proyector
  }
}

export const addNewProyectorRequestSuccess = (proyector,message) => {
  return {
    type: 'ADD_NEW_PROYECTOR_REQUEST_SUCCESS',
    proyector:proyector,
    message:message
  }
}

export const addNewProyectorRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_PROYECTOR_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchProyectores = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchProyectoresRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchProyectoresSuccess(data.proyectores,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchProyectoresFailed(error));
                    })
                  }
                })


  }
}

export const fetchProyectoresRequest = () => {
  return {
    type:'FETCH_PROYECTORES_REQUEST'
  }
}


//Sync action
export const fetchProyectoresSuccess = (proyectores,message) => {
  return {
    type: 'FETCH_PROYECTORES_SUCCESS',
    proyectores: proyectores,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchProyectoresFailed = (error) => {
  return {
    type:'FETCH_PROYECTORES_FAILED',
    error
  }
}

export const fetchProyectorById = (proyectorId) => {
  return (dispatch) => {
    dispatch(fetchProyectorRequest());
      // Returns a promise
      return fetch(apiUrl + proyectorId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchProyectorSuccess(data.proyector[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchProyectorFailed(error));
                 })
               }
             })

  }
}

export const fetchProyectorRequest = () => {
  return {
    type:'FETCH_PROYECTOR_REQUEST'
  }
}


//Sync action
export const fetchProyectorSuccess = (proyector,message) => {
  return {
    type: 'FETCH_PROYECTOR_SUCCESS',
    proyector: proyector,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchProyectorFailed = (error) => {
  return {
    type:'FETCH_PROYECTOR_FAILED',
    error
  }
}

export const showEditModal = (proyectorToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    proyector:proyectorToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editProyector = (proyector) => {
    return (dispatch) => {
      dispatch(editProyectorRequest(proyector));
      return fetch(apiUrl, {
        method:'put',
        body:proyector
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editProyectorSuccess(data.proyector,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editProyectorFailed(error));
          })
        }
      })
    }
}

export const editProyectorRequest = (proyector) => {
   return {
     type:'EDIT_PROYECTOR_REQUEST',
     proyector
   }
}

export const editProyectorSuccess = (proyector,message) => {
  return {
    type:'EDIT_PROYECTOR_SUCCESS',
    proyector:proyector,
    message:message
  }
}

export const editProyectorFailed = (error) => {
  return {
    type:'EDIT_PROYECTOR_FAILED',
    error
  }
}

export const deleteProyector = (proyector) => {
  return (dispatch) => {
    dispatch(deleteProyectorRequest(proyector));
    return fetch(apiUrl + proyector._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteProyectorSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteProyectorFailed(error));
        })
      }
    })

  }
}

export const deleteProyectorRequest = (proyector) => {
   return {
     type:'DELETE_PROYECTOR_REQUEST',
     proyector
   }
}

export const deleteProyectorSuccess = (message) => {
  return {
    type:'DELETE_PROYECTOR_SUCCESS',
    message:message
  }
}

export const deleteProyectorFailed = (error) => {
  return {
    type:'DELETE_PROYECTOR_FAILED',
    error
  }
}

export const showDeleteModal = (proyectorToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    proyector:proyectorToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
