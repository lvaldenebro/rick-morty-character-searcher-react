//PropsTypes
import PropTypes from 'prop-types';

const FilterName = ( {filterName, handleFilterName} ) => {
    const handleChange = (ev) => {
        handleFilterName(ev.target.value);
    };
    const handleSubmit = (ev) => { //to avoid that the page refreshes when clicking in intro
        ev.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='main_input' type="text" onChange={handleChange} value={filterName} placeholder='Rick San..'/>
        </form>
)};

FilterName.propTypes = {
    filterName: PropTypes.string.isRequired,
    handleFilterName: PropTypes.func.isRequired,
};
export default FilterName;