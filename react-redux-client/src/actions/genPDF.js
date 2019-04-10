import jsPDF from 'jspdf';


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
    console.log("PrintPDF : ",proData.ubiAlias);
        var doc = new jsPDF({
        orientation: "l",
        unit: "mm"
        });

        doc.text(proData.ubiAlias, 130, 20);
        doc.text(proData.ubiInvent, 130, 40);

        let dataSrc = doc.output('datauristring');
        let w= window.open("", "MsgWindow");
        w.document.write("<html><head><title>jsPDF</title></head><body><embed src=" + 
        dataSrc + " width='100%' height='100%'></embed></body></html>");

 }
 