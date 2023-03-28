import styled from "styled-components";
import { Main } from "../../theme/theme";

const SingleProductMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 66%;
  margin: 0 auto;
  gap: 8%;
`;

export { SingleProductMain };
