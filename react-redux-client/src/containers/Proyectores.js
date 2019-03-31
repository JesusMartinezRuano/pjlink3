// ./react-redux-client/src/containers/Proyectores.js
import { connect } from 'react-redux';
import * as proyectorActions from '../actions/proyectorActions';
import Proyectores from '../components/Proyectores';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedProyectorState: state.proyectorState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchProyectores: () => dispatch(proyectorActions.fetchProyectores()),
    mappedEditProyector: proyectorToEdit => dispatch(proyectorActions.editProyector(proyectorToEdit)),
    mappedshowEditModal: proyectorToEdit => dispatch(proyectorActions.showEditModal(proyectorToEdit)),
    mappedhideEditModal: () => dispatch(proyectorActions.hideEditModal()),
    mappedDeleteProyector: proyectorToDelete => dispatch(proyectorActions.deleteProyector(proyectorToDelete)),
    mappedshowDeleteModal: proyectorToDelete => dispatch(proyectorActions.showDeleteModal(proyectorToDelete)),
    mappedhideDeleteModal: () => dispatch(proyectorActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Proyectores);
