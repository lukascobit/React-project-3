import React, {useEffect, useState} from 'react';
//import CountButton from './CountButton/countButton.js';
import SearchBar from './SearchBar/SearchBar.js';
import Button from './button/Button.js'



const App = () => {

  let [productsState,setProductsState] = useState([])

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then(productsArray =>{
              const newProductsState = productsArray.map((product)=>{
                return product.title
              })
              setProductsState(newProductsState)
            })




  },[])

  const hasProducts = productsState.length > 0


    return(
      <div>
        {/*hasProducts ? <SearchBar products={productsState}/> : 'Loading...'*/}
        <Button>first</Button>
        <Button>second</Button>
        
        
      </div>

    )
  }
  
export default App