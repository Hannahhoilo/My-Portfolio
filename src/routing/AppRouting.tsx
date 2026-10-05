import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { HomePage, AboutPage, ProjectsPage, ContactPage, NotFoundPage } from "../pages";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout har Header, Footer og havbakgrunnen. Outlet viser siden som matcher URL-en */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/om-meg" element={<AboutPage />} />
          <Route path="/prosjekter" element={<ProjectsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
