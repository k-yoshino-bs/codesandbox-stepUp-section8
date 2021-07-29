import { Footer } from "../atoms/layoute/Footer";
import { Header } from "../atoms/layoute/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
