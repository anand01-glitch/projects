import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
