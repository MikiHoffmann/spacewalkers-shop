import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { themeLight } from "./styles/Themes";

import ScrollToTop from "./components/mainComponents/ScrollToTop";
import { StyledMain } from "./components/styledComponents/Main.styled";
import NavBar from "./components/mainComponents/NavBar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/mainComponents/Footer";

function App() {
  return (
    <>
    <ThemeProvider theme={themeLight}>
      <GlobalStyle/>
      <Router>
        <NavBar />
        <StyledMain className="backgroundImg">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
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
