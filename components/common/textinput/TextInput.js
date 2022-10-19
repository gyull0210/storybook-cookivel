import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({id, label, placeholder, readonly, disabled, error, ...props}){
  const size = "";

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        {...props}
        ref={ref}
      />
      {error && <div className="error">{error}</div>}
    </div>
  )
}

TextInput.propTypes = {
  
  id: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,

  readOnly: PropTypes.bool,

  disabled: PropTypes.bool,
  
  error: PropTypes.string,
};
