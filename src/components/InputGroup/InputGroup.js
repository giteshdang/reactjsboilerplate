import React from 'react';
import PropTypes from 'prop-types';

export const InputGroup = ({ id, label, type, placeholder, value, subtitle, error, onChange, onFocus, onBlur, multipleErrors }) => {
    let errors;
    if (multipleErrors) {
        errors = error ? error.map((item, index) => <div className='error-item' key={index}> {item}</div>) : '';
    } else {
        errors = error && error.length > 0 ? <div className='error-item'> {error[error.length - 1]}</div> : '';
    }
    return (
        <div className={error ? 'error-group form-group' : 'form-group'}>
            <label htmlFor={id}>{label}<span className='inline items-center'>*</span></label>
            <input
                type={type}
                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                autoComplete='off'
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                autoCorrect='off'
                spellCheck='false'
                noValidate />
            <span className='error-form'>
                {errors}
            </span>
            <span className='text-red text-xs italic'>{subtitle}</span>
            <span className='gray-line' />
        </div>
    );
};

InputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    multipleErrors: PropTypes.bool
};

export default InputGroup;