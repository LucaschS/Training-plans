import AuthForm from "../components/AuthForm";
import { Link, type ActionFunctionArgs } from "react-router";

function AuthenticationPage() {
  return (
    <>
      <Link to="signup">Create Account</Link>
      <AuthForm />
    </>
  );
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = await request.formData();
  const authData = {
    login: data.get("login"),
    password: data.get("password"),
  };
  console.log(authData);
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status == 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not authenticate user" }),
      {
        status: 500,
      }
    );
  }
}

export default AuthenticationPage;
