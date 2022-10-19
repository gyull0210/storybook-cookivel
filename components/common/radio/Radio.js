import React from 'react';
import PropTypes from 'prop-types';

export default function Radio({size, ...props}){
  return (
    <div>
      <input
        type="radio"
        id=""
        className=""
        name=""
        defaultChecked=""
        checked=""
        disabled=""
        {...props}
      />
      <label
        htmlFor=""
        id=""
        className=""
      />
    </div>
  )
}

Radio.PropTypes = {

}

Radio.defaultProps = {

}