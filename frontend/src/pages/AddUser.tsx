import { ActionFunctionArgs } from "react-router-dom";
import AddUserForm from "../components/AddUserForm";

function AddUser() {
  return <AddUserForm />;
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = await request.formData();
  const addUserData = {
    name: data.get("name"),
    surname: data.get("surname"),
    email: data.get("email"),
    phone: data.get("phone"),
  };
  console.log(addUserData, 'frontend');
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addUserData),
  });
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not post" }), {
      status: 500,
    });
  }
}
export default AddUser;
