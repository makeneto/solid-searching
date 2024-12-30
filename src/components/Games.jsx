import SingleGame from "./SingleGame"

// Componente de percorre todo array com os dados dos jogos e em seguida partilha renderiza para outro componente
export default function Games({ filteredGames, setCart, cart }) {
    return (
        <ul>
            {filteredGames.map((game) => (
                <SingleGame
                    setCart={setCart}
                    cart={cart}
                    gameObj={game}
                    key={game.id}
                />
            ))}
        </ul>
    )
}