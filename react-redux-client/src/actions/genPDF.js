<<<<<<< HEAD
import jsPDF from 'jspdf';

=======
import React from 'react';
import ReactDOM from 'react-dom';
>>>>>>> pull

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
<<<<<<< HEAD
        var doc = new jsPDF({
        orientation: "l",
        unit: "mm"
        });

        doc.text(proData.ubiAlias, 130, 20);
        doc.text(proData.ubiInvent, 130, 40);

        let dataSrc = doc.output('datauristring');
        let w= window.open("", "MsgWindow");
        w.document.write("<html><head><title>"+proData.ubiAlias+"</title></head><body><embed src=" + 
        dataSrc + " width='100%' height='100%'></embed></body></html>");

=======
    console.log("before fs");
    var fs = require('fs');

var PDFDocument = require('pdfkit');



var pdf = new PDFDocument({

  size: 'LEGAL', // See other page sizes here: https://github.com/devongovett/pdfkit/blob/d95b826475dd325fb29ef007a9c1bf7a527e9808/lib/page.coffee#L69

  info: {

    Title: 'Tile of File Here',

    Author: 'Some Author',

  }

});



// Write stuff into PDF

pdf.text('Hello World');



// Stream contents to a file

pdf.pipe(

  fs.createWriteStream('./path/to/file.pdf')

)

  .on('finish', function () {

    console.log('PDF closed');

  });



// Close PDF and write file.

pdf.end();
window.open('file.pdf');
    
>>>>>>> pull
 }
 var Example = React.Component({
  fbShare: function() {
      window.open('http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=javascript:fbShare("http://jsfiddle.net/stichoza/EYxTJ/")&p[images][0]="http://goo.gl/dS52U"', 'sharer', 'toolbar=0,status=0,width=548,height=325');
  },

  render: function() {
      return (<div>
          <img src="http://pasadenainstitute.com/fb-shareTransp122x42.png" onClick={this.fbShare} />
      </div>);
  }
});

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);