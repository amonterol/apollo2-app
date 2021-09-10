import HeaderBar from "./HeaderBar";
import HeaderBar2 from "./HeaderBar2";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <HeaderBar2 />
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

export default Layout;
