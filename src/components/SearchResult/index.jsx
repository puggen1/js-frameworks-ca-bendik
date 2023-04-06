import React from 'react'
import { SearchResultInner, SearchResultLink } from './style'
const SearchResult = ({data}) => {
  return (
        <SearchResultInner>
              <SearchResultLink to={`/product/` + data.id}>

            <p>{data.title}</p>
            <p className='price'>{data.discountedPrice},- </p>
            </SearchResultLink>
        </SearchResultInner>
  )
}

export default SearchResult