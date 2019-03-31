// ./react-redux-client/src/components/Proyector.js
import React from 'react';




export default class Proyector extends React.Component {

  componentDidMount(){
    this.props.mappedfetchProyectorById(this.props.params.id);
    
  }
  render(){
    const proyectorState = this.props.mappedProyectorState;    
    
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
           <h3>{proyectorState.proyector.ubiAlias}</h3>
           <p>{proyectorState.proyector.ubiInvent}</p>
         </div>
       }
      </div>
    );
  }
}
