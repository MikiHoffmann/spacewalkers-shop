import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { themeDark } from "../styles/Themes";
import { StyledProductListItem } from "../components/styledComponents/ProductListItem.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
import { addToCart } from "../state/actions/shopActions";

const ProductListItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <StyledProductListItem>
      <span className="itemTitle">
        <h4>{product.name}</h4>
      </span>
      <div className="itemImgContainer">
        <img
          className="itemImg"
          src={`../images/productImg/${product.img}`}
          alt={product.name}
        />
      </div>
      <span className="itemPrice">{product.price} money</span>
      <ThemeProvider theme={themeDark}>
        <StyledLinkButton
          className="detailsButton"
          
        >
          <Link to={`/${product.id}`}>view details</Link>
        </StyledLinkButton>
        <StyledLinkButton
          className="addButton"
          onClick={() => {
            dispatch(addToCart(product.id));
          }}
        >
          add to my shoppingcart
        </StyledLinkButton>
      </ThemeProvider>
    </StyledProductListItem>
  );
};

export default ProductListItem;
