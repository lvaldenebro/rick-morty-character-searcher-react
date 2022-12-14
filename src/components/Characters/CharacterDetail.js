//Router
import { Link } from 'react-router-dom';
//Styles
import '../../styles/components/CharacterDetail.scss';

const CharacterDetail = ( {character} ) => {

    const isDead = (status) => {
        if (status === 'Dead') {
        return '💀'
        }
        switch (status) {
            case 'Dead':
            return '💀';
            break;
            case 'unknown':
            return '❔';
            break;
            case 'Alive':
            return '🥳';
            break
            default:
            return status;
        }
};

    const whichSpecies = (species) => {
        switch (species) {
            case 'Human':
            return '👤';
            break;
            case 'Alien':
            return '👽';
            break;
            default:
            return species;
        }
    };

    return (
        <>
            <Link className='main_return' to='/'>Volver {'>'}</Link>
            <article key={character.id} className='main_item'>
                <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
                <section>
                    <h4>{character.name}</h4> {/* name+surname */}
                    {/* call the function */}
                    <p>{`Status: ${character.status}${isDead(character.status)}`}</p>
                    <p>{`Species: ${character.species}${whichSpecies(character.species)}`}</p>
                    <p>{`Origin: ${character.planet}`}</p>
                    <p>{`Episodes: ${character.episodes}`}</p>
                </section>
            </article>
        </>
)};

export default CharacterDetail;