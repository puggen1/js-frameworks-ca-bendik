import React, {useContext} from 'react'
import { ProductContext } from '../../context/Products'
import { Main } from '../../theme/theme'
import Products from '../../components/Products'
import Error from '../../components/Error'
import HomeLoader from '../../components/Loader/Home'
const Home = () => {
    const loadingAmount = 25
    //still debating what to use, it seems to be the same amount of time...
    const {dataToDisplay, isLoading, isError, /*reset, setDataToDisplay*/} = useContext(ProductContext);
    //const {data, isLoading, isError} = useApi(baseUrl)
    if(isLoading){
        return(<Main className='home'>
            {[...Array(loadingAmount)].map((item,idx)=> {return <HomeLoader key={idx}/>})}
        </Main>)
    }
    if(isError){
        return(<Main><Error/></Main>)
    }
    return (
    
    <Main className="home">
        <Products products={dataToDisplay}/>
    </Main>  )
}

export default Home