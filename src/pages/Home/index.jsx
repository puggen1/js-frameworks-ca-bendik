import React, {useContext} from 'react'
import { ProductContext } from '../../context/Products'

import { Main } from '../../theme/theme'
import Products from '../../components/Products'
import useApi from '../../hooks/useApi'
import { baseUrl } from '../../utils/constants'
const Home = () => {
    //still debating what to use, it seems to be the same amount of time...
    const {data, isLoading, isError} = useContext(ProductContext);
    //const {data, isLoading, isError} = useApi(baseUrl)
    if(isLoading){
        return(<Main>test</Main>)
    }
    if(isError){
        return(<Main>error</Main>)
    }
    return (
    <Main className="Home">
        <Products products={data}/>
    </Main>
  )
}

export default Home