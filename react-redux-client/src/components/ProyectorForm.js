// ./react-redux-client/src/components/ProyectorForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ProyectorForm = (props) => {
  return (
    <form className="form form-horizontal" id="addProyectorForm" onSubmit={props.addProyector}>
    <div className="row">
    <h3 className="centerAlign">Añadir Proyector</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Ubicación Alias: </ControlLabel>
            <FormControl
              type="text" placeholder="Alias de ubicación"
              name="ubiAlias"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Ubicación de Inventario:</ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Ubicación de inventario"
                  name="ubiInvent"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Añadir</Button>
          </FormGroup>
    </form>
  );
}

export default ProyectorForm;
