import Header from "./header/Header";
import Footer from "./footer/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
