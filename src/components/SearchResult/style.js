import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResultInner = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-bottom: 1px solid #464343;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
   
`
const SearchResultLink = styled(Link)`
        color: #464343;
        text-decoration: none;
  :last-of-type{
    div{
        border: none;
      }}
   
`

export {SearchResultInner, SearchResultLink}