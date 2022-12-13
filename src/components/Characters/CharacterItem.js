import { Link } from 'react-router-dom';

const CharacterItem = ( {character} ) => {
    return (
        <li key={character.id} className='list_item'>
            <Link to={`/character-detail/${character.id}`}>
                <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
                <h4>{character.name} </h4> {/* name+surname */}
                <p>{character.species}</p>
            </Link>
        </li>
)};

export default CharacterItem;