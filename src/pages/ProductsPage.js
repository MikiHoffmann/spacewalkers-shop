import { useSelector } from "react-redux";

import { StyledPageTitle } from "../components/styledComponents/PageTitle.styled";
import { StyledArticle } from "../components/styledComponents/Article.styled";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
  const products = useSelector((state) => state.shop.products);
  return (
    <>
      <StyledPageTitle className="backgroundImg">products</StyledPageTitle>
      <StyledArticle>
        <ProductList products={products} />
      </StyledArticle>
    </>
  );
};

export default ProductsPage;
