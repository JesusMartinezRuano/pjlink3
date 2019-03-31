// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem,NavDropdown ,MenuItem} from 'react-bootstrap';
import { IndexLinkContainer,LinkContainer} from 'react-router-bootstrap';
import './App.css';
import ProyectorForm from './ProyectorForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddProyector = this.toggleAddProyector.bind(this);
    this.addProyector = this.addProyector.bind(this);
  }

  toggleAddProyector(e){
    e.preventDefault();
     this.props.mappedToggleAddProyector();
      
  }
  addProyector(e){
      e.preventDefault();
      const form = document.getElementById('addProyectorForm');
      if(form.ubiAlias.value !== ""  && form.ubiInvent.value !== ""){
        const data = new FormData();
        data.append('ubiAlias', form.ubiAlias.value);
        data.append('ubiInvent', form.ubiInvent.value);
        // const data = {
        //   ubiAlias: form.ubiAlias.value,
        //   ubiInvent: form.ubiInvent.value
        // }
        this.props.mappedAddProyector(data);
      form.reset();
      }
      else{
        return ;
      }
  }
  
  render(){

    const appState = this.props.mappedAppState;

    console.log("origin",document.location.origin);
    console.log("pathname",document.location.pathname);
    
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Gestión de proyectores</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
          <Nav><Nav>
        <IndexLinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Inicio</NavItem>
        </IndexLinkContainer>
      </Nav>
        
      <NavDropdown disabled={appState.showAddProyector} eventKey={2} title="Informes" id="basic-nav-dropdown">
        <LinkContainer to={{ pathname: '/', query: {  } }}>
          <MenuItem  disabled={(document.location.pathname==='/')} eventKey={2.1}>Detalles</MenuItem>
        </LinkContainer>
        <LinkContainer  to={{ pathname: '/', query: {  } }}>
          <MenuItem  eventKey={2.2}>Todos</MenuItem>
        </LinkContainer>
      </NavDropdown>
       
    </Nav> 
          
    <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddProyector}>
         <NavItem eventKey={4}>Añadir proyector</NavItem>
      </LinkContainer>
      </Nav>
        </Navbar.Collapse>

    
  </Navbar>
  <div className="container">
  {appState.showAddProyector &&
    <ProyectorForm addProyector={this.addProyector} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
