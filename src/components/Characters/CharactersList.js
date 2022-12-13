import CharacterItem from './CharacterItem';

const CharactersList = ( {characters} ) => {
    const characterElements = characters.map((character) => {
        return <CharacterItem character={character}/>
    })
    return (
        <section>
            <ul className='list'>{characterElements}</ul>
        </section>
)};

export default CharactersList;