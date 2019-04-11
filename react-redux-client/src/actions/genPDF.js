
import jsPDF from 'jspdf';
import canvg from 'canvg';
import header from  './Etsit_header.svg'; 







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

       //var svgtext='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"><path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/><path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/></svg>';
       
       //var fs = require('fs');
       
       //let svgtext = (svgtext) => import(/* webpackMode: "eager" */ './Etsit_header.svg');
        var svgtext = header;
        svgtext = svgtext.replace(/\r?\n|\r/g, '').trim();
        console.log("Svgtext",svgtext);
        var doc = new jsPDF({
        orientation: "p",
        size: "A4",
        unit: "mm"
        });

        //var svgString = header.toString();
        fetch(header)
        .then(response => response.text())
        .then(text => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        console.log(text);                                                          ///START HERE
        });

        var canvas = document.createElement('canvas');
        canvas.width = 4724;
        canvas.height = 300;
        canvas.style.position = "absolute";
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 4724, 300);
        //context.drawSvg(svgtext,0,0);
        //canvg(canvas, svgtext);
        canvg(canvas,svgtext,{
          offsetX: 0,
          offsetY: 0            
          }); 
        var imgData = canvas.toDataURL({
          type: 'image/png',
          format: 'png',
          quality: 1 // compression works now!
      });
        doc.addImage(imgData, 'PNG', 0, 0 ,200, 12.7);

        //doc.addSVG(header,100,100,100,100);
        
        doc.text(proData.ubiAlias, 15.6, 20);
        doc.text(proData.ubiInvent, 15.6, 40);

        var blob = doc.output('blob');
        saveTextAsFile(proData.ubiAlias+".pdf",blob)
      }

      function saveTextAsFile(fileNameToSaveAs, textToWrite) {
        /* Saves a text string as a blob file*/  
        var ie = navigator.userAgent.match(/MSIE\s([\d.]+)/),
            ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/),
            ieEDGE = navigator.userAgent.match(/Edge/g),
            ieVer=(ie ? ie[1] : (ie11 ? 11 : (ieEDGE ? 12 : -1)));
      
        if (ie && ieVer<10) {
          console.log("No blobs on IE ver<10");
          return;
        }
      
        var textFileAsBlob = new Blob([textToWrite], {
          type: 'text/plain'
        });
      
        if (ieVer>-1) {
          window.navigator.msSaveBlob(textFileAsBlob, fileNameToSaveAs);
      
        } else {
          var downloadLink = document.createElement("a");
          downloadLink.download = fileNameToSaveAs;
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.onclick = function(e) { document.body.removeChild(e.target); };
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
          downloadLink.click();
        }
      }

      