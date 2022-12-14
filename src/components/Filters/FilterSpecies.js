//PropsTypes
import PropTypes from 'prop-types';

const FilterSpecies = ( {filterSpecies, handleFilterSpecies} ) => {
    const handleChange = (ev) => {
        handleFilterSpecies(ev.target.value);
    };
    const handleSubmit = (ev) => { //to avoid that the page refreshes when clicking in intro
        ev.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='main_input' type="text" onChange={handleChange} value={filterSpecies} placeholder='Human...'/>
        </form>
)};

FilterSpecies.propTypes = {
    filterSpecies: PropTypes.string.isRequired,
    handleFilterSpecies: PropTypes.func.isRequired,
};
export default FilterSpecies;