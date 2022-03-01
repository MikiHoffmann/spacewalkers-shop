import { StyledArticle } from "../components/styledComponents/Article.styled";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const currentItem = useSelector((state) => state.shop.currentItem);
  console.log(currentItem)
  return (
    <>
      <StyledArticle>
        <h2>product detail</h2>
        <ProductCard currentItem={currentItem} />
      </StyledArticle>
    </>
  );
};



export default DetailsPage;
