import { Outlet } from "react-router-dom";

function UsersRootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default UsersRootLayout;
