import { Link } from "react-router-dom";
import pdfImg from "../../../asset/pdfImg/Horizon.jpg";
const PdfSection = () => {
  return (
    <>
      <div className="flex gap-10">
        <Link to="/pdfFiles">
          <div className="avatar">
            <div className="w-44 rounded-full">
              <img className="btn btn-circle " src={pdfImg} />
            </div>
          </div>
          <p className="text-xl font-bold">Health Related Video</p>
        </Link>
        <Link to="/videoFiles">
          <div className="avatar">
            <div className="w-44 rounded-full">
              <img className="btn btn-circle " src={pdfImg} />
            </div>
          </div>
          <p className="text-xl font-bold">Health Related Video</p>
        </Link>
      </div>
    </>
  );
};

export default PdfSection;
