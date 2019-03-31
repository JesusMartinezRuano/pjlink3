// ./react-redux-client/src/containers/Proyector.js
import { connect } from 'react-redux';
import * as proyectorActions from '../actions/proyectorActions';
import Proyector from '../components/Proyector';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedProyectorState: state.proyectorState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchProyectorById: proyectorId => dispatch(proyectorActions.fetchProyectorById(proyectorId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Proyector);
