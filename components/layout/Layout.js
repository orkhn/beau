import Header from "./header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default layout;
