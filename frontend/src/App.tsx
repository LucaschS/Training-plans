import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Home";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/users",
        element: <Users />,

        // children: [
        //   {
        //     path: ":userId",
        //     id: "userDetail",
        //     element: <User />,
        //   },
        // ],
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
