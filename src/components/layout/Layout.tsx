import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OceanBackground from "./OceanBackground";

const Layout = () => {
  return (
    <>
      <OceanBackground />
      {/* relative z-10 legger innholdet over havbakgrunnen */}
      <div className="relative z-10 flex min-h-screen flex-col text-white">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
