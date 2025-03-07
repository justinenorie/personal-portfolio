import PropTypes from 'prop-types';

/**
 * Typography component for creating text headings and paragraphs.
 * @param {String} variant The type of heading styles to render
 * @param {String} children The text to be displayed or rendered
 * @param {String} className for custome styles classnames to be applied to the component
 * @returns {ReactElement} results to be displayed
*/

const Typography = ({ variant, children, className = '' }) => {
  const baseStyles = {
    h1: 'text-3xl sm:text-4xl md:text-5xl font-bold font-title',
    h2: 'text-2xl sm:text-3xl md:text-4xl font-semibold font-body',
    h3: 'text-xl sm:text-2xl md:text-3xl font-medium font-body',
    p: 'text-base sm:text-lg md:text-xl font-body',
    small: 'text-xs md:text-sm font-body',
  };

  return <p className={`${baseStyles[variant]} ${className}`}>{children}</p>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'small']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Typography;
