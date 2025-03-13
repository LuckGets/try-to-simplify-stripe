import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <div className="bg-red-100 h-screen">
        <Outlet />
      </div>
    </>
  );
}
