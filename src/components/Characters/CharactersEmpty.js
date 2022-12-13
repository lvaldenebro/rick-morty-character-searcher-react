import empty from '../../images/empty.jpg';

const CharactersEmpty = () => {
    return (
        <>
            <h1>ERROR</h1>
            <p>Sorry, the character you are looking for does not match anything in our data.</p>
            <img className='img' src={empty} alt="Rick&Morty's empty garage" />
        </>
)};
export default CharactersEmpty;