import styled from "styled-components";
import { Main } from "../../theme/theme";
import Button from "../../components/Button";
const CartMain = styled(Main)`
  width: 33%;
`;
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
`;
export { CartMain, CartItems };
