import Typography from '../ui/Typography';
import PropTypes from 'prop-types';
import ExpCards from '../ui/ExpCards';
import data from '../../lib/personals';

export default function Experience({ className }) {
  return (
    <section id="experiences" className={className}>
      <Typography variant="h2" className="text-txt-light mb-8">
        Experience
      </Typography>
      <div className="grid gap-5">
        {data.experience.map((item, index) => (
          <ExpCards
            key={index}
            position={item.position}
            companyName={item.companyName}
            duration={item.duration}
            location={item.location}
            description={item.description}  
          />
        ))}
      </div>
    </section>
  );
}

Experience.propTypes = {
  className: PropTypes.string.isRequired,
};
