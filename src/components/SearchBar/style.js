import styled from "styled-components";
const InnerSearchBar = styled.div`
  width: 100%;
  padding: 0px;
  margin: 0px;
  min-height: 5vh;
  background-color: #f2d3a8;
  display: grid;
  grid-template-columns: 15% auto 15%;

  .right{
    grid-column: 3/4;
    display: flex;
    height: 50%;
    margin: auto 0;
  }
  .sort{

  }
`;
const Search = styled.input`
  background-color: white;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  border: none;
  margin: auto 10px;
  border-radius: 5px;
`;

export { InnerSearchBar, Search };

