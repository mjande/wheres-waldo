import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <div
      className="flex flex-col items-center bg-gradient-to-b from-red-500 via-red-400"
      id="root"
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
