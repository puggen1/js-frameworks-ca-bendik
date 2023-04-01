import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { InnerSearchBar, Search } from './style'
//import {Checkbox} from '@mui/material'
const SearchBar = () => {
  const [sort, setSort] = React.useState('aToZ')


  const handleChange = (event) => {
    setSort(event.target.value)
    // connect to all products and sort them
    //must snc branch with build...
  }
  return (
    <InnerSearchBar>
        <Search placeholder='Search'/>
        <div className='right'>
        <Select className='sort' value={sort} onChange={handleChange}>
          <MenuItem  value='aToZ'>a to z</MenuItem>
          <MenuItem value='zToA'>z to a</MenuItem>
          <MenuItem value='priceLowToHigh'>price low to high</MenuItem>
          <MenuItem value='priceHighToLow'>price high to low</MenuItem>
          <MenuItem value='ratingLowToHigh'>rating low to high</MenuItem>
          <MenuItem value='ratingHighToLow'>rating high to low</MenuItem>
        </Select>
        </div>
    </InnerSearchBar>
  )
}

export default SearchBar

