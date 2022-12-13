import { Link } from 'react-router-dom';

const CharacterItem = ( {character} ) => {
    return (
        <li key={character.id} className='list_item'>
            <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
            <Link to={`/character-detail/${character.id}`}>
                <h4>{character.name} </h4>
            </Link> {/* name+surname */}
            <p>{character.species}</p>
        </li>
)};

export default CharacterItem;