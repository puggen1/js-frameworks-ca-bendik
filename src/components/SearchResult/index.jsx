import React from 'react'
import { SearchResultInner, SearchResultLink } from './style'
const SearchResult = ({data}) => {
  return (
    <SearchResultLink to={`product/` + data.id}>
        <SearchResultInner>
            <p>{data.title}</p>
            <p className='price'>{data.discountedPrice},- </p>
        </SearchResultInner>
        </SearchResultLink>
  )
}

export default SearchResult