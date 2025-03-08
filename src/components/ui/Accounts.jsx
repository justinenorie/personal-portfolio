import PropTypes from 'prop-types';

const Accounts = ({ Icon, link, className }) => {
  return (
    <a href={link}>
      <Icon className={`${className} text-txt-light`} />
    </a>
  );
};

Accounts.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Accounts;
