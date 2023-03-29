import styled from "styled-components";
const SingleProductContent = styled.div`
  width: 100%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
`;
const ProductInfo = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  grid-template-areas: "title title"
  "desc desc"
  "price button";
`
const Title = styled.h1`
  grid-area: title;
  margin: 0;
`
const Desc = styled.p`
  grid-area: desc;
  margin: 0;
  font-size: 20px;
`
const Price = styled.p`
grid-area: price;
margin: 0 auto 0 0;
`
export { SingleProductContent, ProductInfo, Title, Desc, Price };
