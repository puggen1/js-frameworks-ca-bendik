import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResultInner = styled.div`
 
    color: #464343;
        text-decoration: none;
        height: 100%;
        width: 100%;
        display: grid;
        a{
          text-decoration: none;
          color: #464343;
        }
        .price{
            text-align: end;
        }
        :nth-child(odd){
            a{
            background-color: #ececec;
        }
        }
  :last-of-type{
    a{
        border: none;
        border-radius: 0 0 10px 10px;
      }}
      :hover{
        a{
        background-color:#DBDBDB;
    }
      }
`
const SearchResultLink = styled(Link)`
           display: grid;
    grid-template-columns: 2fr 1fr;
    border-bottom: 1px solid #464343;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
   
`

export {SearchResultInner, SearchResultLink}