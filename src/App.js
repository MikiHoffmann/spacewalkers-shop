import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { themeLight } from "./styles/Themes";

import ScrollToTop from "./components/mainComponents/ScrollToTop";
import { StyledMain } from "./components/styledComponents/Main.styled";
import Header from "./components/mainComponents/Header";
import NavBar from "./components/mainComponents/NavBar";
import Footer from "./components/mainComponents/Footer";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import RegisterForm from "./components/RegisterForm";
import ResetForm from "./components/ResetForm";

function App() {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Router>
          <Header />
          <NavBar />
          <StyledMain className="backgroundImg">
            <ScrollToTop>
              <Routes>
                <Route exact path="/" element={<SignInPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/details/" element={<DetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/reset" element={<ResetForm/>}/>
              </Routes>
              <Footer />
            </ScrollToTop>
          </StyledMain>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
