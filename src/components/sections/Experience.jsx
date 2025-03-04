import Typography from '../ui/Typography';
import PropTypes from 'prop-types';

export default function Experience({ className }) {
  return (
    <section id="experiences" className={className}>
      <Typography variant="h2" className="text-txt-light">
        Experience
        <div className="border-8"></div>
      </Typography>
    </section>
  );
}

Experience.propTypes = {
  className: PropTypes.string.isRequired,
};