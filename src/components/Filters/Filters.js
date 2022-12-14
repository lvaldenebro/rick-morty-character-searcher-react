//PropsTypes
import PropTypes from 'prop-types';
//Components
import FilterName from './FilterName';
// Styles
import '../../styles/components/Filters/Filters.scss';
import FilterSpecies from './FilterSpecies';

const Filters = (props) => {

    return (
        <>
        <FilterName filterName={props.filterName} handleFilterName={props.handleFilterName}/>
        <FilterSpecies  filterSpecies={props.filterSpecies} handleFilterSpecies={props.handleFilterSpecies}/>
        </>
)};

Filters.propTypes = {
    filterName: PropTypes.string.isRequired,
    handleFilterName: PropTypes.func.isRequired,
};
export default Filters;