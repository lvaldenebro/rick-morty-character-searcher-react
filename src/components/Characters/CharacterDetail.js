import { Link } from 'react-router-dom';

const CharacterDetail = ( {character} ) => {
    return (
        <>
            <Link className='link main_return' to='/'>Volver {'>'}</Link>
            <article key={character.id} className='main_item'>
                {/* link/navlink */}
                <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
                <section className='main_detail'>
                    <h4>{character.name}</h4> {/* name+surname */}
                    <p>{`Status: ${character.status}`}</p>
                    <p>{`Species: ${character.species}`}</p>
                    <p>{`Origin: ${character.planet}`}</p>
                    <p>{`Episodes: ${character.episodes}`}</p>
                </section>
            </article>
        </>
)};

export default CharacterDetail;