import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Header />
      <div className="flex-1 bg-green-900 flex justify-center h-full w-full pb-8">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
