import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer size-12">
                <div className="Newsletter">
                    <div className="container">
                        <div className="text-newsletter size-3">
                            <h4>Newsletter</h4>
                            <span>Receba nossas promoções e novidades. inscreva-se.</span>
                        </div>
                        <div className="newsletter-inputs size-9">
                            <form>
                                <input  placeholder="Seu nome"/>
                                <input placeholder="Seu e-mail" />
                                <button className="btn">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright size-12">
                    <span>Developed by Corebiz</span>
                </div>
            </div>
        </>
    )
}

export default Footer