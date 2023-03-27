import styled from "styled-components";

const ProductCard = styled.div`
  box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  width: 300px;
  height: 330px;
  p {
    margin: 0px;
  }
  h2 {
    margin: 0px;
  }
`;
const ProductCardImage = styled.img`
  border-radius: 10px 10px 0px 0px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
const ImageSection = styled.div`
  border-radius: 10px 10px 0px 0px;
  height: 60%;
  width: 100%;
  position: relative;
`;
export { ProductCard, ProductCardImage, ImageSection };
