// ./react-redux-client/src/components/Proyector.js
import React from 'react';
import InlineSVG from 'svg-inline-react';
import {Table} from 'react-bootstrap';

var colLeft = {                                                // added inline css
  textAlign : 'right',
  fontWeight : 'bold',
  verticalAlign: 'middle',
  borderBottom:'thin double #808080',
  width:'50%'
};
var colRigth = {                                                //added inline css
  textAlign : 'left',
  borderBottom:'thin double #808080',
  width:'50%'
};



export default class Proyector extends React.Component {  
  
  componentDidMount(){
    this.props.mappedfetchProyectorById(this.props.params.id);    
  }
  render(){
    const proyectorState = this.props.mappedProyectorState;    
    const barcode = require('pure-svg-code/barcode');
    var svgInvent = '';
    //var svgEtiqueta = '';
    if(this.props.mappedProyectorState.proyector) {      
      svgInvent = barcode(proyectorState.proyector.ubiInvent, "code128", {width:'50', barWidth:1, barHeight:10});
      //svgEtiqueta = barcode(proyectorState.proyector.etiqueta, "code128", {width:'50', barWidth:1, barHeight:25});
    }
    else{
      console.log("waiting for props before render")
    }
    
    return(
      <div className="proyectorDetail">
        <h2>Detalles del proyector</h2>
          {!proyectorState.proyector && proyectorState.isFetching &&
            <div>
              <p>Cargando proyector....</p>
            </div>
          }
        {proyectorState.proyector && !proyectorState.isFetching &&
          <div>
            {/* <h3>{proyectorState.proyector.ubiAlias}</h3>
            <p>{proyectorState.proyector.ubiInvent}</p>
            <InlineSVG src={svgInvent} /> 
            <InlineSVG src={svgInvent} />  */}
              <Table>
                <tbody>
                  <tr><td style={colLeft}>Alias de Ubicación: &nbsp; </td><td style={colRigth}><h3>{proyectorState.proyector.ubiAlias}</h3></td></tr>
                  <tr><td style={colLeft}>Ubicación de inventario: &nbsp; </td><td style={colRigth}><InlineSVG src={svgInvent} /></td></tr>
                  {/* <tr><td style={col1}>Marca &nbsp; </td><td style={col2}>{proyectorState.proyector.marca}</td></tr>
                  <tr><td style={col1}>Modelo &nbsp; </td><td style={col2}>{proyectorState.proyector.modelo}</td></tr>
                  <tr><td style={col1}>Etiqueta &nbsp; </td><td style={col2}>{proyectorState.proyector.etiqueta}</td></tr>
                  <tr><td style={col1}>Etiquetado &nbsp; </td><td style={col2}>{proyectorState.proyector.etiquetado}</td></tr>
                  <tr><td style={col1}>Año &nbsp; </td><td style={col2}>{proyectorState.proyector.año}</td></tr>
                  <tr><td style={col1}>Número de serie &nbsp; </td><td style={col2}>{proyectorState.proyector.sn}</td></tr>
                  <tr><td style={col1}>IP &nbsp; </td><td style={col2}>{proyectorState.proyector.ip}</td></tr>
                  <tr><td style={col1}>Password &nbsp; </td><td style={col2}>{proyectorState.proyector.password}</td></tr>
                  <tr><td style={col1}>Operable &nbsp; </td><td style={col2}>{proyectorState.proyector.operable}</td></tr>
                  <tr><td style={col1}>Observaciones &nbsp; </td><td style={col2}>{proyectorState.proyector.observaciones}</td></tr>  */}             
                </tbody>
            </Table>     
          </div>
        }
      </div>
    );    
  }  
}
