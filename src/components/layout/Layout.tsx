import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OceanBackground from "./OceanBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <OceanBackground />
      {/* relative z-10 legger innholdet over bakgrunn */}
      <div className="relative z-10 flex min-h-screen flex-col text-white">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
