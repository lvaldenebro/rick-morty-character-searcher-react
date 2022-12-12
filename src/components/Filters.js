const Filters = ( {filterName, handleFilterName} ) => {
    const handleChange = (ev) => {
        handleFilterName(ev.target.value);
    };
    return (
        <form>
            <input type="text" onChange={handleChange} value={filterName}/>
        </form>
)};

export default Filters;