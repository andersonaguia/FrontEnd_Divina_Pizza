import { GlobalStyle } from "../../globalStyle/globalStyle";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Main } from "../../components/Main/Main";
import { Router } from "../../router/Router";
import { Footer } from "../../components/Footer/Footer";

export const AppLayout = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Main>
          <Router />
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
};
