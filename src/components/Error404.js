//Resources
import error from '../images/error-404.jpg';
//Router
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <h1>ERROR 404</h1>
            <p>The website you are looking for does not exist.</p>
            <img className='img' src={error} alt="Rick&Morty error 404" />
            <Link className='main_return' to='/'>Volver {'>'}</Link>
        </>
)};
export default Error404;