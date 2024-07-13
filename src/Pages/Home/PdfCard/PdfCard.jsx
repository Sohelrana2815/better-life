import { FaDownload, FaFilePdf } from "react-icons/fa";
const PdfCard = ({ pdfFile }) => {
  // console.log(pdfFile);
  const { name, file, description } = pdfFile;
  return (
    <div className="card  shadow-xl">
      <figure className="px-10 pt-10">
        <FaFilePdf className="text-6xl"></FaFilePdf>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <a
            href={file}
            alt="Health Pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <FaDownload className="text-xl"></FaDownload>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfCard;
