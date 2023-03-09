import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BeersPage } from "./pages/beer/BeersPage";
import { LoginPage } from "./pages/user/LoginPage";
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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);
