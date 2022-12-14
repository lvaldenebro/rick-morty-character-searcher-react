//PropsTypes
import PropTypes from 'prop-types';
//Components
import InputFilter from './InputFilter';

const Filters = (props) => {
    const handleInput = (ev) => {
        if (ev.target.name === 'name') {
            props.handleFilterName(ev.target.value);
        } else {
            props.handleFilterSpecies(ev.target.value);
        }
    };
    const handleSubmit = (ev) => { //to avoid that the page refreshes when clicking in intro
        ev.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputFilter inputId='name' inputName='name' inputPlaceholder='Rick San...' inputValue={props.filterName}
            handleInput={handleInput}/>
            <InputFilter inputId='species' inputName='species' inputPlaceholder='Human' inputValue={props.filterSpecies}
            handleInput={handleInput}/>
        </form>
)};

Filters.propTypes = {
    filterName: PropTypes.string.isRequired,
    filterSpecies: PropTypes.string.isRequired,
    handleFilterName: PropTypes.func.isRequired,
    handleFilterSpecies: PropTypes.func.isRequired,
};
export default Filters;