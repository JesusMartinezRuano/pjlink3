// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as proyectorActions from '../actions/proyectorActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedToggleAddProyector: () => dispatch(appActions.toggleAddProyector()),
    mappedAddProyector: proyector => dispatch(proyectorActions.addNewProyector(proyector))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
