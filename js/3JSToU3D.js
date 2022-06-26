// Create a JavaScript File that converts 3JS into U3D 
var canvas;

var scenes = [], renderer;

// @description: A Function that generates a PDF 
function generatePDF() {
    console.log("generating PDF - PDFを作成中");
    const strMime = 'image/jpeg';
      var doc = new jsPDF();
      var imgData = this.renderer.domElement.toDataURL(strMime);
      imgData.replace(strMime, this.strDownloadMime);
      doc.addImage(imgData, 'JPEG', 5, -10, 150, 150);
      doc.save("test.pdf");
}