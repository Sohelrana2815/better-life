import { useEffect, useState } from "react";
import PdfCard from "../PdfCard/PdfCard";

const PdfViewer = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetch("pdf.json")
      .then((res) => res.json())
      .then((data) => setPdfFiles(data));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {pdfFiles.map((pdfFile) => (
          <PdfCard key={pdfFile.id} pdfFile={pdfFile}></PdfCard>
        ))}
      </div>
    </div>
  );
};

export default PdfViewer;
