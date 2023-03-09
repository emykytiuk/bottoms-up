import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BeersPage } from "./pages/beer/BeersPage";
import { SigninPage } from "./pages/user/SigninPage";
import { SignupPage } from "./pages/user/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <BeersPage />,
      },
      {
        path: "/signin",
        element: <SigninPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);
