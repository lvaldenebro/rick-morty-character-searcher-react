//PropsTypes
import PropTypes from 'prop-types';
//Router
import { Link } from 'react-router-dom';
//Styles
import '../../styles/components/characters/CharacterDetail.scss';

const CharacterDetail = ( {character} ) => {

    const isDead = (status) => {
        switch (status) {
            case 'Dead':
            return '💀';
            case 'Alive':
            return '🥳';
            default:
            return '❔';
        }
};

    const whichSpecies = (species) => {
        switch (species) {
            case 'Human':
            return '👤';
            case 'Alien':
            return '👽';
            default:
            return '';
        }
    };

    return (
        <>
            <Link className='main_return' to='/'>Volver {'>'}</Link>
            <article key={character.id} className='main_item'>
                <img src={character.image} alt={character.name} title={`Image of ${character.name}`}/>
                <section>
                    <h4>{character.name}</h4>
                    <p>{`Status: ${character.status}${isDead(character.status)}`}</p>
                    <p>{`Species: ${character.species}${whichSpecies(character.species)}`}</p>
                    <p>{`Origin: ${character.planet}`}</p>
                    <p>{`Episodes: ${character.episodes}`}</p>
                </section>
            </article>
        </>
)};

CharacterDetail.propTypes = {
    character: PropTypes.object.isRequired,
};
//we are checking the object character, that is exactly what we are sending throw props
export default CharacterDetail;