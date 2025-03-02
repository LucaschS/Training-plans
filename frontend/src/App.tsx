import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users, { loader as usersLoader } from "./pages/Users";
import AddUser, { action as addUserAction } from "./pages/AddUser";
import AuthenticationPage, {
  action as authAction,
} from "./pages/AuthenticationPage";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import UserDetailPage, { loader as userLoader } from "./pages/UserDetailPage";
import UsersRootLayout from "./pages/UsersRootLayout";
import AuthLayout from "./pages/AuthLayout";
import SignUpPage, { action as signUpAction } from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <AuthenticationPage />,
            action: authAction,
          },
          {
            path: "signup",
            element: <SignUpPage />,
            action: signUpAction,
          },
        ],
      },
      {
        path: "users",
        element: <UsersRootLayout />,
        children: [
          {
            path: "users",
            element: <Users />,
            loader: usersLoader,
          },
          {
            path: ":userId",
            element: <UserDetailPage />,
            loader: userLoader,
          },
        ],
      },
      {
        path: "add-user",
        element: <AddUser />,
        action: addUserAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
