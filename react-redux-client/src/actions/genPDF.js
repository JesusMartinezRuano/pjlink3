export function genPDF(proyectorId) {
    console.log(proyectorId);
    fetch(document.location.origin+'/api/'+proyectorId)
    .then(function(response){
        response.json()
    .then(function(responseBody){    
    printPDF(responseBody.proyector[0]);
    })
    })   
 }
 function printPDF(proData){
    console.log("PrintPDF : ",proData);
    
 }
 