const CharacterItem = ( {user} ) => {
    return (
        <li key={user.id}>
            {/* link/navlink */}
            <img src={user.image} alt={user.name} title={`Image of ${user.name}`}/>
            <h4>{user.name} </h4> {/* name+surname */}
            <p>{user.species}</p>
        </li>
)};

export default CharacterItem;