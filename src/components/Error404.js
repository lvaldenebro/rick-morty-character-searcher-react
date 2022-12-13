import error from '../images/error-404.jpg';

const Error404 = () => {
    return (
        <>
            <h1>ERROR 404</h1>
            <p>The website you are looking for does not exist.</p>
            <img className='img' src={error} alt="Rick&Morty error 404" />
        </>
)};
export default Error404;