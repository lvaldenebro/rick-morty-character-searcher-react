import CharacterItem from './CharacterItem';

const CharactersList = ( {users} ) => {
    const characterElements = users.map((user) => {
        return <CharacterItem user={user}/>
    })
    return (
        <section>
            <ul className='list'>{characterElements}</ul>
        </section>
)};

export default CharactersList;