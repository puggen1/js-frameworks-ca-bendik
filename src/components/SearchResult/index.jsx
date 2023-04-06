import React from 'react'
import { SearchResultInner, SearchResultLink } from './style'
const SearchResult = ({data, action}) => {
  return (
    <SearchResultLink onClick={action} onTouchEnd={action} to={`/product/` + data.id}>
        <SearchResultInner>
            <p>{data.title}</p>
            <p className='price'>{data.discountedPrice},- </p>
        </SearchResultInner>
        </SearchResultLink>
  )
}

export default SearchResult