import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root";
import Home from "../Pages/Home/Home/Home";
import PdfViewer from "../Pages/Home/PdfViewer/PdfViewer";
import HealthTipsVideo from "../Pages/Home/HealthTipsVideo/HealthTipsVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pdfFiles",
        element: <PdfViewer></PdfViewer>,
      },
      {
        path: "/videoFiles",
        element: <HealthTipsVideo></HealthTipsVideo>,
      },
    ],
  },
]);

export default router;
