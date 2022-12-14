// Styles
import '../../src/styles/components/FilterName.scss';

const Filters = ( {filterName, handleFilterName} ) => {
    const handleChange = (ev) => {
        handleFilterName(ev.target.value);
    };
    const handleSubmit = (ev) => { //to avoid that the page refreshes when clicking in intro
        ev.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='main_input' type="text" onChange={handleChange} value={filterName}/>
        </form>
)};

export default Filters;