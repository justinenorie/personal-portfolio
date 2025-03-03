import PropTypes from 'prop-types';

const Accounts = ({ Icon, link }) => {
  return (
    <a href={link}>
      <Icon className="h-10 w-10 text-txt-light " />
    </a>
  );
};

Accounts.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
};

export default Accounts;
