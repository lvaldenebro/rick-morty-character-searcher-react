//PropsTypes
import PropTypes from 'prop-types';
// Styles
import '../../styles/components/filters/InputFilter.scss';

const Input = ( props ) => {
    return (
        <input className='main_input' id={props.inputId} type={props.inputType} name={props.inputName} onInput={props.handleInput} value={props.inputValue} placeholder={props.inputPlaceholder}/>
)};

Input.defaultProps = {
    inputType: 'text',
};

Input.propTypes = {
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
};
export default Input;