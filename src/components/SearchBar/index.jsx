//import { MenuItem, Select } from '@mui/material'
import {useState, useContext, useRef} from 'react'
import { InnerSearchBar, Search } from './index.styles'
import { ProductContext } from '../../context/Products'
import { useLocation } from 'react-router-dom'
import SearchResult from '../SearchResult'
import { useEffect } from 'react'
//import {Checkbox} from '@mui/material'
const SearchBar = () => {
  //const [sort, setSort] = useState('aToZ')
  const [search, setSearch] = useState('');
  const [focus,setFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const {dataToDisplay} = useContext(ProductContext);
  const [showResults, setShowResults] = useState(dataToDisplay);
  const searchResultRef = useRef();
  const currentLocation = useLocation()
 /* const handleChange = (event) => {
    //setSort(event.target.value)
    // connect to all products and sort them
    //must snc branch with build...
    
  }*/

  //this updates the search results, if the value is empty it will show a mapped empty array
  //if the value is not empty it will filter the dataToDisplay array and show the results
  const updateSearch = (e) => {
    setSearch(e.target.value)
    if(e.target.value === ""){
      setShowResults([]);
    }
    else{
      setShowResults(dataToDisplay.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase())}))
}
  }
  //this function triggers when the searchbar is focused
  const showResult = (e) => {
    setFocus(true)
  }
  //this function triggers when the searchbar is clicked or touched, this is to prevent the searchbar from closing when the user clicks on a search result, especially on mobile
  const clicked = () => {
    setIsClicked(true)
  }
  //this function triggers when the searchbar is blurred, but only if the user has not clicked on a search result
  const hideResult = (e) => { 

    if(isClicked){
      setIsClicked(false)
      return
    }
    else if(searchResultRef.current && e.relatedTarget === null){
      setFocus(false)
    }
  }

  //a use effect to reset the searchbar when the user navigates to a new page, this might be changed, but not the setFocus...
  useEffect(()=>{
    setFocus(false)
    setSearch('')
    setShowResults([])
  },[currentLocation]) 
  return (
    <InnerSearchBar>
      <div className='search'>
        <Search  onBlur={hideResult} onFocus={showResult} onChange={updateSearch} value={search} placeholder='Search'/>
        {focus && showResults.length > 0 ? <div  ref={searchResultRef} className='searchResult'>
          {showResults.map(item =>{
            return <SearchResult key={item.id} action={clicked} data={item}/>
          })}
        </div> :  null}
        </div>
      
    </InnerSearchBar>
  )
}
/*
  {currentLocation.pathname === "/" false ?
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
  :null
  }
*/
export default SearchBar

