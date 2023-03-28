import React, {useContext} from 'react'
import { ProductContext } from '../../context/Products'
import { Main } from '../../theme/theme'
import Products from '../../components/Products'
const Home = () => {
    //still debating what to use, it seems to be the same amount of time...
    const {dataToDisplay, isLoading, isError, reset, setDataToDisplay} = useContext(ProductContext);
    //const {data, isLoading, isError} = useApi(baseUrl)
    if(isLoading){
        return(<Main>test</Main>)
    }
    if(isError){
        return(<Main>error</Main>)
    }
    return (
    
    <Main className="Home">
        <Products products={dataToDisplay}/>
    </Main>  )
}

export default Home