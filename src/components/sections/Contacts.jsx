import Typography from '../ui/Typography';
import PropTypes from 'prop-types';

const Contacts = ({ className }) => {
  return (
    <section id="contacts" className={`${className}`}>
      <div className="grid gap-4">
        <Typography variant="h2" className="text-txt-light text-center">
          Contacts
        </Typography>
        <Typography variant="p" className="text-txt-light text-center">
          Feel free to reach out for collaboration or inquiries!
        </Typography>
      </div>

      <div>
        <Typography variant="p" className="text-txt-light">
          
        </Typography>
      </div>
    </section>

    
  );
}

export default Contacts;

Contacts.propTypes = {
  className: PropTypes.string.isRequired,
};
