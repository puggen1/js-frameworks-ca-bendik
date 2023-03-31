import styled from "styled-components";
const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  grid-template-areas:
    "titleLabel amountLabel priceLabel remove"
    "title amount price remove";
  border-radius: 10px;
  box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: #464343;
  gap: 20px 0px;
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  .title {
    grid-area: titleLabel;
  }
  .amount {
    grid-area: amountLabel;
    text-align: center;
  }
  .price {
    grid-area: priceLabel;
    text-align: center;
  }
  .productTitle {
    grid-area: title;
  }
  .productAmount {
    grid-area: amount;
    text-align: center;
  }
  .productPrice {
    grid-area: price;
    text-align: center;
  }
  .remove {
    grid-area: remove;
  }
`;
const Label = styled.p``;
const Info = styled.h2``;
const Remove = styled.button`
  background-color: white;
  border: none;
  color: #464343;

  :hover {
    cursor: pointer;
    color: black;
  }
`;
export { Item, Label, Info, Remove };
