import React, {useState, useEffect} from "react"
const DataContext = React.createContext()


function DataContextProvider(props) {

    const [product, setProduct] = useState([])

    const[numClick, setNumClick] = useState(0)

    const[linkar, setLinkar] = useState([])
  
    useEffect(() => {
      fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
      .then( res => res.json())
      .then( json => {
          setProduct(json)
      })
    }, [])

    return (
        <DataContext.Provider value={{product,linkar, setLinkar, setNumClick, numClick}}>
            {props.children}
        </DataContext.Provider>
    )

}




export {DataContextProvider, DataContext}
