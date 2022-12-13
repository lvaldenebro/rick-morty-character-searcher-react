//Components
import CharacterItem from './CharacterItem';
import CharactersEmpty from './CharacterEmpty';
//Styles
import '../../styles/components/CharactersList.scss';

const CharactersList = ( {characters} ) => {
    let characterElements = [];
    if (characters.length === 0) {
        return <CharactersEmpty />
    } else {
        characterElements = characters.map((character) => {
            return <CharacterItem character={character} key={character.id}/> //so the id is received by the first child, that in fact it is the component, not the li
        })
    }

    return (
        <section>
            <ul className='list'>{characterElements}</ul>
        </section>
)};

export default CharactersList;