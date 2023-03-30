import styled from "styled-components";
import { Main } from "../../theme/theme";

const SingleProductMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 66%;
  margin: 0 auto;
  gap: 8%;
  box-sizing: border-box;

  @media screen and (max-width: 1250px) {
    width: 80%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export { SingleProductMain };
