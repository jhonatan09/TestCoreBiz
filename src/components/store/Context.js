import React, {useState, useEffect} from "react"
const DataContext = React.createContext()


function DataContextProvider(props) {

    const [product, setProduct] = useState([])

    const[numClick, setNumClick] = useState(0)

    const[linkar, setLinkar] = useState([])

    const [loader, setLoeader] = useState(true)

    const [errpApi, setErroApi] = useState(false)

 
  
    useEffect(() => {
      fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
      .then( res => res.json())
      .then( json => {
          setProduct(json)
          setLoeader(false)
      })
      .catch(() => {
        setLoeader(false)
        setErroApi(true)
      })
    }, [])

    

    // useEffect(() => {
    //     if(!linkar == ''){
    //         linkar.map(prodNav => {
    //             let newValue = prodNav.event.price;
    //            setProdCart(newValue)
                
    //         })
    //     }
    // }, [linkar])

    return (
        <DataContext.Provider value={{product,linkar, setLinkar, setNumClick, numClick, loader, errpApi}}>
            {props.children}
        </DataContext.Provider>
    )

}




export {DataContextProvider, DataContext}
