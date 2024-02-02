const { PdfDocument } = require("../dist/PdfDocument");

// Expose PdfDocument to the global scope
if (typeof window !== "undefined") {
  window.PdfDocument = PdfDocument;
}
