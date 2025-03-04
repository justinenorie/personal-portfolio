import Typography from '../ui/Typography';
import PropTypes from 'prop-types';
import ExpCards from '../ui/ExpCards';
import data from '../../lib/personals';
import AnimatedDiv from '../../utils/AnimatedDiv';

export default function Experience({ className }) {
  return (
    <section id="experiences" className={className}>
      <AnimatedDiv>
        <Typography variant="h2" className="text-txt-light text-center mb-8">
          Experience
        </Typography>
        <div className="grid gap-5">
          {data.experience.map((item, index) => (
            <AnimatedDiv key={index}>
              <ExpCards
                key={index}
                position={item.position}
                companyName={item.companyName}
                duration={item.duration}
                location={item.location}
                description={item.description}
              />
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>
    </section>
  );
}

Experience.propTypes = {
  className: PropTypes.string.isRequired,
};
