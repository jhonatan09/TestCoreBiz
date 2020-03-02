import React, {useState, useEffect, useContext}  from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './store/Context'
import useWidth from './CustomHook/useWidth'

function Header() {
    const {linkar, numClick, setLinkar, setNumClick} = useContext(DataContext)


    const imgCart = require('../image/cart.png')
    const imgAccount = require('../image/account.png')
    const img = require('../image/logo.png')

    const [view] = useWidth()

    const [btn, setBtn] = useState(false)

    const [receiveP, setReceiveP] = useState('')
    

    const openMenuMob = (event) => {
        setBtn(event)
    }

    const closeMenuMob = (event) => {
        setBtn(event)
    }

    const ReceivePrice = (receive) => {
        const newValue = receive.toLocaleString('pt-br', {minimumFractionDigits: 2})
        setReceiveP(newValue)
    }


    const clearCart = () => {
        setLinkar("")
        setNumClick(0)
    }



    return (
        <div className="nav">
            <div className="container">
                <div className="logo size-2 size-mob-5">
                    <img src={img} />
                </div>
              <div className="fix-center size-10 size-mob-10">
                <div className={`size-mob-2 ${btn ? "hidden" : ""} ${view > 767 ? "hidden" : ""}`} onClick={() => openMenuMob(true)}>
                        <div className="mobile-menu">
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </div>
                </div>
                <nav  className={`nav-bar size-9  ${view > 767 ? "" : `${!btn ? "hidden" : ""}`}`} style={{width: view > 767 ? "" : "100%"}}>
                    <ul className="list-categories">
                        <li><Link className="category" to="/">Categoria 01</Link></li>
                        <li><Link className="category" to="/">Categoria 02</Link></li>
                        <li><Link className="category" to="/">Categoria 03</Link></li>
                        <li><Link className="category" to="/">Categoria 04</Link></li>
                    </ul>
                </nav>
                <div className="user-part size-3  size-mob-10">
                    <div className="my-account">
                        <img src={imgAccount} />
                        <span>Minha conta</span>
                    </div>
                    <div className="cart">
                        <img src={imgCart} />
                        <span className="cart-num">{numClick}</span>
                        {numClick > 0 ? 
                            <div className="cart-item">
                                <h3 className="cart-title-item">Meu carrinho <span className="num-item-cart">{numClick} item(s)</span></h3>
                                {linkar.map(item => {
                                    return (
                                        <div>
                                            <div className="card" onMouseOver={() => ReceivePrice(item.price)}>
                                                <div className="image-product">
                                                   <img src={item.imageUrl} alt={item.productName} />
                                                </div>
                                                <div className="product-info">
                                                    <h4>{item.productName}</h4>
                                                    <div className="price">
                                                        <span>{item.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="content-actions">
                                    <span className="total-price">Total: R$ {receiveP}</span>
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
                                    <button className="btn-clear" onClick={clearCart}>
                                        Limpar carrinho
                                    </button>
                                </div>
                            </div>
                         : ''}
                    </div>
                </div>
                <div className={`close-menu-mobile ${!btn ? "hidden" : ""}`} onClick={() => closeMenuMob(false)}>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                </div>
              </div>
            </div> 
        </div>
    )
}

export default Header