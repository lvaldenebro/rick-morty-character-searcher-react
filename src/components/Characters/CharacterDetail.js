import { Link } from 'react-router-dom';

const CharacterDetail = ( {character} ) => {
    return (
        <>
            <Link to='/'>Volver {'>'}</Link>
            <article key={character.id} className='list_item'>
                {/* link/navlink */}
                <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
                <h4>{character.name}</h4> {/* name+surname */}
                <p>{`Status: ${character.status}`}</p>
                <p>{`Species: ${character.species}`}</p>
                <p>{`Origin: ${character.planet}`}</p>
                <p>{`Episodes: ${character.episodes}`}</p>
            </article>
        </>
)};

export default CharacterDetail;