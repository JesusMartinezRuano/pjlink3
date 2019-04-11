var express = require('express');

var PDFDocument = require('pdfkit');


var router = express.Router();



/* GET home page. */

router.get('/', function(req, res) {

  ;



  // Create a document

  var doc = new PDFDocument();

  doc.pipe(res);



  for (var i = 0; i < 1000; i++) {

    doc.fontSize(25)

       .text('Some text with an embedded font!', 100, 100);

    doc.addPage()

       .fontSize(25)

       .text('Here is some vector graphics...', 100, 100);



    doc.save()

       .moveTo(100, 150)

       .lineTo(100, 250)

       .lineTo(200, 250)

       .fill("#FF3300");



      doc.scale(0.6)

       .translate(470, -380)

       .path('M 250,75 L 323,301 131,161 369,161 177,301 z')

       .fill('red', 'even-odd')

       .restore();



     doc.addPage()

       .fillColor("blue")

       .text('Here is a link!', 100, 100)

       .underline(100, 100, 160, 27, {color: "#0000FF"})

       .link(100, 100, 160, 27, 'http://google.com/');

  }



  doc.end();



  

});



module.exports = router,doc;

