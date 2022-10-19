import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ id, label, size, onChange, ...props }) => {

  return (
    <>
    <input
      type="checkbox"
      id="check-input"
      className="hidden"
      onChange={onChange}
    />
    <label
      id="check-label"
      htmlFor="check-input"
      className={['storybook-checkbox', `storybook-checkbox--${size}`, `storybook-checkbox-default`].join(' ')}
      {...props}
    />
    </>
  );
};

Checkbox.propTypes = {

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  id: string.isRequired,

  label: PropTypes.string.isRequired,

  onChange: PropTypes.func,

  defaultChecked: bool,

  checked: bool,
};

Checkbox.defaultProps = {
  id: 'checkbox-input',
  size: 'medium',
  onChange: true,
  defaultChecked: undefined,
  checked: false,
};
