//import { MenuItem, Select } from '@mui/material'
import {useContext} from 'react'
import { InnerSearchBar, Search } from './index.styles'
import { ProductContext } from '../../context/Products'
import { useLocation } from 'react-router-dom'
import SearchResult from '../SearchResult'
import useSearch from '../../hooks/useSearch'
//import {Checkbox} from '@mui/material'
const SearchBar = () => {
  //const [sort, setSort] = useState('aToZ')
  const {dataToDisplay} = useContext(ProductContext);
  const location = useLocation();
  //getting the useSearch hook
  const { search,
    updateSearch,
    showResults,
    focus,
    showResult,
    hideResult,
    clicked,
    searchResultRef} = useSearch(dataToDisplay, location);
 /*
  * Shows the search bar, if it is focused and there are results to show it will show the results.
  * to show the results it will use the SearchResult component with a map
  */

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
export default SearchBar

