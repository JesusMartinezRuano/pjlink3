import React from 'react';
import {fetchProyectorById} from './proyectorActions';


export function genPDF(password) {
    console.log(password);
    const props=password;
    fetchProyectorById(props.params.id);
    console.log(fetchProyectorById(props.params.id));

    
    
  }
  