import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root";
import Home from "../Pages/Home/Home/Home";
import PdfViewer from "../Pages/Home/PdfViewer/PdfViewer";
import HealthTipsVideo from "../Pages/Home/HealthTipsVideo/HealthTipsVideo";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Timer from "../Pages/Timer/Timer";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/timer",
        element: <Timer></Timer>,
      },
    ],
  },
]);

export default router;
