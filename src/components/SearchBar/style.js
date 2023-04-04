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
  .left{
   display: grid;
   position: relative;
   box-sizing: border-box;
  
   .searchResult{
      position: absolute;
      top:75%;
      left: 10px;
      width: 100%;
      z-index: 1;
      background-color: #ffffff;
      border-radius: 0 0 10px 10px;
      box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
      
    }
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
  :focus {
    border-radius: 5px 5px 0px 0px;
    border: solid 1px #464343;
    outline: none;
  }
`;

export { InnerSearchBar, Search };

