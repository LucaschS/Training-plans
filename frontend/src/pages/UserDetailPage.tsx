import { LoaderFunctionArgs } from "react-router-dom";

function UserDetailPage() {
  return <></>;
}
export default UserDetailPage;

export async function loader({ request, params }: LoaderFunctionArgs) {
  const id = params.userId;
  console.log(id);
  fetch("http://localhost:8080/admin/" + id);
}
