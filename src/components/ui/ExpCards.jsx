import PropTypes from 'prop-types';
import Typography from './Typography';

const ExpCard = ({
  image,
  position,
  companyName,
  duration,
  location,
  description,
}) => {
  return (
    <div className="rounded-3xl border-2 border-txt-light p-5">
      <img
        src={image || '/Rectangle.svg'}
        alt={`${companyName}`}
        className="w-12 h-12"
      />
      <Typography variant="h3" className="text-txt-light">
        {position || 'Your Position'}
      </Typography>
      <Typography variant="p" className="text-txt-light">
        {companyName || 'Company Name'}
      </Typography>
      <Typography variant="small" className="text-txt-light">
        {duration || 'January 1995 - December 1995'}
      </Typography>
      <Typography variant="small" className="text-txt-light">
        {location || 'Company Location'}
      </Typography>
      <Typography variant="small" className="text-txt-light">
        {description || 'lorem lorem'}
      </Typography>
    </div>
  );
};

ExpCard.propTypes = {
  image: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExpCard;
