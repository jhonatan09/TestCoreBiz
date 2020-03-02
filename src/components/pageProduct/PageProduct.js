import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
function PageProduct() {

    const location = useLocation()

    const [btnDe, setBtnDe] = useState(false)

    const [btnIn, setBtnIn] = useState(false)

    const [numInput, setNumInput]= useState(1)

    const [price, setPrice]= useState(location.state.item.price)

    const increment = (event) => {
        setNumInput(prevState => prevState + 1)
        setBtnIn(event)
    }

    const decrescent = (event) => {
            setNumInput(prevState => prevState - 1)
            setBtnDe(event)   
    }

  



   useEffect(() => {
        if(btnIn){
         setPrice(price * numInput)
        }if(btnIn == true){
            setBtnIn(false)
        }
    })


    useEffect(() => {
        if(btnDe){
         setPrice(price / numInput)
        }if(btnDe == true){
             setBtnDe(false)
        }
    })

    console.log(btnIn)

    
    
    
    const prices = price.toLocaleString('pt-br', {minimumFractionDigits: 2})

    return (
        <div className="Product-page">
            <div className="container">
                <div className="image-product">
                    <img src={location.state.item.imageUrl} alt={location.state.item.productName}/>
                </div>
                <div className="info-product">
                    <div className="prod">
                        <h1>{location.state.item.productName}</h1>
                        <div className="details-product">
                            <span className="price"><span>R$</span>{prices}</span>
                        </div>
                    </div>
                    <div className="details-inputs">
                            <div className="numbers">
                                <button onClick={() => decrescent(true)}>-</button>
                                <span>{numInput}</span>
                                <button className="plus" onClick={() => increment(true)}>+</button>
                            </div>
                        <button className="btn-buy">
                            Comprar
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.136" height="18.5" viewBox="0 0 20.136 18.5">
                                <g id="shopping-cart" transform="translate(0.25 0.25)">
                                <g id="Grupo_106" data-name="Grupo 106">
                                    <g id="Grupo_105" data-name="Grupo 105">
                                    <path id="Caminho_325" data-name="Caminho 325" d="M19.555,23.8a.434.434,0,0,0-.327-.154H3.682l-.409-2.007c0-.154-.245-.309-.409-.309H.409a.387.387,0,1,0,0,.772H2.536L4.5,31.524a2.846,2.846,0,0,0,2.782,2.162h9.409a.387.387,0,1,0,0-.772H7.364a1.915,1.915,0,0,1-1.636-.849L17.673,30.52A.342.342,0,0,0,18,30.212l1.636-6.176A.366.366,0,0,0,19.555,23.8Zm-2.291,6.021L5.318,31.292,3.845,24.345H18.655Z" transform="translate(0 -21.334)" fill="#fff" stroke="#fff" stroke-width="0.5"/>
                                    </g>
                                </g>
                                <g id="Grupo_108" data-name="Grupo 108" transform="translate(4.715 13.293)">
                                    <g id="Grupo_107" data-name="Grupo 107">
                                    <path id="Caminho_326" data-name="Caminho 326" d="M130.353,384a2.354,2.354,0,1,0,2.354,2.354A2.331,2.331,0,0,0,130.353,384Zm0,3.766a1.412,1.412,0,1,1,1.412-1.412A1.448,1.448,0,0,1,130.353,387.766Z" transform="translate(-128 -384)" fill="#fff" stroke="#fff" stroke-width="0.5"/>
                                    </g>
                                </g>
                                <g id="Grupo_110" data-name="Grupo 110" transform="translate(12.105 13.293)"><g id="Grupo_109" data-name="Grupo 109"><path id="Caminho_327" data-name="Caminho 327" d="M343.687,384a2.354,2.354,0,1,0,2.353,2.354A2.331,2.331,0,0,0,343.687,384Zm0,3.766a1.412,1.412,0,1,1,1.412-1.412A1.448,1.448,0,0,1,343.687,387.766Z" transform="translate(-341.334 -384)" fill="#fff" stroke="#fff" stroke-width="0.5"/></g></g></g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageProduct