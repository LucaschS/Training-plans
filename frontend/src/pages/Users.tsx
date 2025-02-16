import { useEffect, useState } from "react";

type UsersPageData = {
  users: {
    name: string;
    surname: string;
    email: string;
    phone: string;
  }[];
};

function Users() {
  const [error, setError] = useState<Error | null>(null);
  const [users, setUsers] = useState<UsersPageData | null>(null);
  console.log(users, " users");

  console.log(error, " error");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:8080/users");
        const resData: unknown = await response.json();

        // console.log(resData, "resData");
        setUsers(resData as UsersPageData);

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
      } catch (error: unknown) {
        setError(error as Error);
      }
    }

    fetchUsers();
  }, []);

  return <>{/* <h1>{users?.users[0].name}</h1> */}</>;
}

export default Users;
