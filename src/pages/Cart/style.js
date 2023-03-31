import styled from "styled-components";
import { Main } from "../../theme/theme";
import Button from "../../components/Button";
const CartMain = styled(Main)`
  width: 33%;
  h1 {
    text-align: center;
  }
  .empty {
    text-align: center;
  }
`;
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
`;
const Total = styled.p`
  display: flex;
  margin: 0 0 0 auto;
  font-size: 25px;
  font-weight: bold;
`;
const LowerCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 0px;
  .checkout {
    grid-column: 2 / 3;
    margin: 0 0 0 auto;
  }
  .removeAll {
    width: 50%;
  }
`;

export { CartMain, CartItems, Total, LowerCart };
