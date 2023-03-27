import styled from "styled-components";

//naming is based on where it is used, small is for phone size, where the modal should take up most of the screen
const InnerModalSmall = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
`;
const InnerModalBig = styled.div`
  width: 300px;
  height: 100%;
  background-color: white;
`;

export { InnerModalBig, InnerModalSmall };
