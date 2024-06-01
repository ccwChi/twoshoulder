import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`h-10  rounded-full text-sm px-4 py-2.5 inline-flex justify-center items-center shadow-[2px_3px_2px_0px_rgba(0,0,0,0.2)] ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;