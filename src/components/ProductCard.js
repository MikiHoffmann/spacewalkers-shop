import { StyledProductCard } from "../components/styledComponents/ProductCard.styled";
import { StyledLinkButton } from "../components/styledComponents/LinkButton.styled";
const ProductCard = ({ currentItem }) => {
  return (
    <StyledProductCard>
      <span className="itemTitle">
        <h3>{currentItem.name}</h3>
      </span>
      <span className="itemPrice">{currentItem.price} money</span>
      <img
        src={`../images/productImg/${currentItem.img}`}
        alt={currentItem.name}
      />
      <span className="itemDescription">{currentItem.description}</span>
      <StyledLinkButton>link</StyledLinkButton>
    </StyledProductCard>
  );
};
export default ProductCard;
