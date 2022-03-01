import { useSelector } from "react-redux";
import { StyledArticle } from "../components/styledComponents/Article.styled";
import PageTitle from "../components/PageTitle";
import CartList from "../components/CartList";

const CartPage = () => {
  const cartItems = useSelector((state) => state.shop.cartItems);
  console.log("cartItems", cartItems);
  const pageTitle = "shoppingcart";
  return (
    <>
      <PageTitle className="backgroundImg" pageTitle={pageTitle}/>
      <StyledArticle>
        <CartList cartItems={cartItems} />
      </StyledArticle>
    </>
  );
};

export default CartPage
