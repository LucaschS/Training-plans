import { useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();
  console.log(users, "users");

  return <h1>One user</h1>;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/users");

  console.log(response, "resData");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not post" }), {
      status: 500,
    });
  } else {
    return response;
  }
}

export default Users;
