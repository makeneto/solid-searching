// Componente que mostra a ilustração de 'PAGE NOE FOUND' quando nenhum jogo é encontrado
export default function SearchNotFound({ imgUrl, imgAlt, filters }) {
    return (
        <img
            src={imgUrl}
            alt={imgAlt}
            className={filters ? 'search__notFound' : 'search__notFound--large'}
        />
    )
}