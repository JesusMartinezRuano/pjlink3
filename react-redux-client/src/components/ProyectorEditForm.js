// ./react-redux-client/src/components/ProyectorEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ProyectorEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditProyectorForm" onSubmit={props.editProyector}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Ubicación Alias: </ControlLabel>
          <input type="hidden" value={props.proyectorData._id} name="id"/>
            <FormControl
              type="text" placeholder="Enter ubiAlias"
              name="ubiAlias" defaultValue={props.proyectorData.ubiAlias}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Ubicación de inventario"
                  name="ubiInvent" defaultValue={props.proyectorData.ubiInvent}
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Actualizar</Button>
          </FormGroup>
    </form>
  );
}

export default ProyectorEditForm;
