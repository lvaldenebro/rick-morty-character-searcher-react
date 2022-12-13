// Styles
import '../../src/styles/components/Filters.scss';

const Filters = ( {filterName, handleFilterName} ) => {
    const handleChange = (ev) => {
        handleFilterName(ev.target.value);
    };
    const handleSubmit = (ev) => { //to avoid that the page refresh when clicking in into
        ev.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='main_input' type="text" onChange={handleChange} value={filterName}/>
        </form>
)};

export default Filters;