import React from 'react'
import { Main } from '../../theme/theme'
import Products from '../../components/Products'
import useApi from '../../hooks/useApi'
import { baseUrl } from '../../utils/constants'
const Home = () => {
    const {data, isLoading, isError} = useApi(baseUrl);
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