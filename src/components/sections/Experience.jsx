import Typography from '../ui/Typography';
import PropTypes from 'prop-types';
import ExpCards from '../ui/ExpCards';
import data from '../../lib/personals';
import AnimatedDiv from '../../utils/AnimatedDiv';

const Experience = ({ className }) => {
  return (
    <section id="experiences" className={className}>
      <AnimatedDiv>
        {/* TODO: Add Education */}
        <Typography variant="h2" className="text-txt-light text-center mb-8">
          Experience
        </Typography>
        <div className="grid gap-5">
          {data.experience.map((item, index) => (
            <AnimatedDiv key={index}>
              <ExpCards
                key={index}
                image={item.companyLogo}
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

export default Experience;

Experience.propTypes = {
  className: PropTypes.string.isRequired,
};
