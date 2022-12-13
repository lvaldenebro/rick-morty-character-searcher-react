//Router
import { Link } from 'react-router-dom';
//Styles
import '../../styles/components/CharacterItem.scss';

const CharacterItem = ( {character} ) => {
    return (
        <li className='list_item'>
            <Link to={`/character-detail/${character.id}`}>
                <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
                <h4>{character.name}</h4>
                <p>{character.species}</p>
            </Link>
        </li>
)};

export default CharacterItem;