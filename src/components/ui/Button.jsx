import PropTypes from 'prop-types';

/**
 * Button component for creating buttons with different styles and variants
 * @param {String} children The text to be displayed on the button
 * @param {String} className Additional custom styles to be applied to the button
 * @param {String} variant The type of button style to be applied
 * @param {Object} props Additional props to be passed to the button element
 * @returns {ReactElement} The button element
 */

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = {
    primary: 'bg-primary text-txt-dark hover:bg-primary/50',
    secondary: 'bg-secondary text-txt-light hover:bg-secondary/90',
    accent: 'bg-accent text-txt-light hover:bg-accent/90',
    transparent: 'bg-transparent text-txt-light hover:bg-transparent',
  };

  return (
    <button
      type="button"
      className={`${baseStyles[variant]} font-bold py-2.5 px-4 rounded-md transition-transform duration-300 hover:scale-110 cursor-pointer focus:scale-110 active:scale-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'transparent']),
};

export default Button;

