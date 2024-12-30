import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import CartItem from "../components/CartItem"


export default function Cart({ cart, setCart, currentTotal, oldTotal }) {
    return (
        <div>
            {cart.length > 0 &&
                <CartMain
                    cart={cart}
                    setCart={setCart}
                    currentTotal={currentTotal}
                    oldTotal={oldTotal}
                />
            }

            {cart.length === 0 &&
                <CartZero cart={cart} />
            }
        </div>
    )
}


function CartMain({ cart, setCart, currentTotal, oldTotal }) {
    const [cupomCode, setCupomCode] = useState('')
    const [cupomMessage, setCupomMessage] = useState('')
    const [cupomState, setCupomState] = useState(false)
    const UpperCupom = cupomCode.toUpperCase()

    const cupomCount = Number(currentTotal) * 15 / 100
    const insertedCupom = Number(currentTotal) - cupomCount

    function checkCupom(e) {
        e.preventDefault()

        if (
            UpperCupom === 'SOLIDGAMES' ||
            UpperCupom === 'MAKENE' ||
            UpperCupom === 'CESARIO' ||
            UpperCupom === 'MAYALA' ||
            UpperCupom === 'MATEUS'
        ) {
            setCupomMessage('Cupom aplicado com sucesso')
            setCupomCode('')
            setCupomState(true)
        }
        else {
            setCupomMessage('O código de cupom inserido não é válido')
            setCupomState(false)
        }
    }

    function applySolidCupom() {
        setCupomCode('SOLIDGAMES')
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Carrinho de Compras</h1>

            <div className="cart__container">
                <div className="cart__itemsPage">
                    <h5 className="cart__length blue__word no-capitalize">{cart.length} jogos no carrinho</h5>

                    <ul className="cart__items--container">
                        {cart.map((game) => (
                            <CartItem
                                setCart={setCart}
                                cart={cart}
                                cartObj={game}
                                key={game.id}
                            />
                        ))}
                    </ul>
                </div>

                <div className="cart__info">
                    <div className="cart__info--primary">
                        <h2>Total:</h2>
                        <h1>
                            {!cupomState ? currentTotal : insertedCupom.toFixed(3)} AOA
                            {cupomState &&
                                <EditIcon />
                            }
                        </h1>
                        <h4>{oldTotal} AOA</h4>
                        <p>40% de desconto</p>

                        <Link to='/'>
                            <button className="cart__info--primary--btn">Adicionar jogos</button>
                        </Link>
                    </div>

                    <div className="cart__info--secondary">
                        <div className="cart__info--secondary-first">
                            <h5>Promoções Exclusivas</h5>
                            <div className="cart__info--secondary--promotion">
                                <div>
                                    <p>Mais 15% off em jogos</p>
                                    <p className="cart__info--secondary--promotion--cupom">SOLIDGAMES</p>
                                </div>
                                <h4 onClick={applySolidCupom}>Aplicar</h4>
                            </div>
                        </div>

                        <form className="cart__info--secondary-second" onSubmit={checkCupom}>
                            <input
                                type="text"
                                value={cupomCode}
                                onChange={(e) => setCupomCode(e.target.value)}
                                placeholder="Inserir Cupom"
                                className="cart__info--secondary-second--input"
                            />

                            <input
                                type="submit"
                                value='Aplicar'
                                className="cart__info--secondary-second--btn"
                            />
                        </form>

                        <p className={`${cupomState ? 'cart__info--secondary-second--sucess' : 'cart__info--secondary-second--error'}`}>{cupomMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CartZero({ cart }) {
    const [lengthWord, setLengthWord] = useState('')

    useEffect(() => {
        if (cart.length === 0) {
            setLengthWord('Sem jogos no carrinho')
        }
    }, [cart])

    return (
        <div className="cart">
            <h1 className="cart__title">Carrinho de Compras</h1>

            <div className="cart__container--zero">
                <>
                    <h5 className="cart__length--zero blue__word no-capitalize">{lengthWord}</h5>

                    <div className="cart__itemsPage--zero">
                        <div>
                            <img src="/images/add-to-cart.png" alt="Add to Cart Illustration" className="cart__itemsPage--zero--image" />
                            <p>Seu carrinho está vazio. Continue procurando para encontrar um jogo</p>
                            <Link to='/'>
                                <button>Continuar comprando</button>
                            </Link>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

function EditIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="editSvg">
            <path fill="#006bff" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
    )
}