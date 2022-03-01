import { StyledPageTitle } from "../components/styledComponents/PageTitle.styled";

const PageTitle = ({ pageTitle }) => {
  return (
    <>
      <StyledPageTitle className="backgroundImg">{pageTitle}</StyledPageTitle>
    </>
  );
};

export default PageTitle;
