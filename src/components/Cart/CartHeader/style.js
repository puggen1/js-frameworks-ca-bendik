import styled from "styled-components";
import { DiscountOverlay } from "../../Discount/style";
const CartHeaderInner = styled.div`
  margin-left: auto;
  position: relative;
`;
const CartOverlay = styled(DiscountOverlay)`
  width: 20px;
  height: 20px;
  top: 0px;
  right: 0px;
  color: white;
`;

export { CartHeaderInner, CartOverlay };
