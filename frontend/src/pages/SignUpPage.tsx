import { Link, type ActionFunctionArgs } from "react-router";
import SignUpForm from "../components/SignUpForm";

function SignUpPage() {
  return (
    <>
      <Link to="/auth">Login</Link>
      <SignUpForm />
    </>
  );
}

export async function action({ request, params }: ActionFunctionArgs) {
  const data = await request.formData();
  const authData = {
    login: data.get("login"),
    password: data.get("password"),
    dupa: data.get("dupa"),
  };
  console.log(authData);
  const response = await fetch("http://localhost:8080/signup", {
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

export default SignUpPage;
