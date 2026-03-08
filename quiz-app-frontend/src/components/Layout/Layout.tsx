import "./Layout.css"
import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props { 
    children: ReactNode 
};

const Layout = ({ children }: Props) => {
  return (
    <div className="app-wrapper">
       <Navbar />
      <div className="app-container">
        <header className="app-header">
          <div className="brand">Eesti Statistikaamet — Viktoriin</div>
        </header>

        <main>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;