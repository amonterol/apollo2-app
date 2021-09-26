import HeaderBar2 from "../HeaderBar2";
import NavBar from "../NavBar";
import Footer from "../Footer";

function MainLayout({ children }) {
  return (
    <div>
      <HeaderBar2 />
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

export default MainLayout;
