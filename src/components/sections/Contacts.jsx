import Typography from '../ui/Typography';
import PropTypes from 'prop-types';
import Accounts from '../ui/Accounts';
import data from '../../lib/personals';
import Button from '../ui/Button';

const Contacts = ({ className }) => {
  return (
    <section id="contacts" className={`${className} space-y-5`}>
      <div className="grid md:grid-cols-2 gap-12 items-start content-center">
        <div className="space-y-4">
          <Typography
            variant="h2"
            className="text-txt-light text-center md:text-left"
          >
            Contacts
          </Typography>
          <Typography
            variant="p"
            className="text-txt-light text-center md:text-left"
          >
            Feel free to reach out for collaboration or inquiries!
          </Typography>

          <div className="grid grid-cols-1 min-[100rem]:grid-cols-2 gap-4">
            {data.myAccounts.map(({ icon, link, name }, index) => {
              const linkText = link
                .replace(/^https?:\/\/[^/]+/, '')
                .replace('mailto:', '');
              return (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-cards w-full hover:bg-accent/50 transition-transform hover:scale-104 duration-300"
                >
                  <Accounts
                    Icon={icon}
                    link={link}
                    className="w-10 h-10 text-txt-light"
                  />
                  <div>
                    <Typography
                      variant="p"
                      className="text-txt-light font-semibold"
                    >
                      {name}
                    </Typography>
                    <Typography variant="small" className="text-txt-light">
                      {linkText}
                    </Typography>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start pt-5 md:pt-0">
            {data.otherSocials.map(({ icon, link, name }, index) => (
              <div key={index} className="relative group">
                <Accounts
                  Icon={icon}
                  link={link}
                  className="w-7 h-7 text-txt-light hover:text-accent transition-transform hover:scale-120 duration-300"
                />
                <Typography
                  variant="small"
                  className="absolute top-8 hidden group-hover:block bg-accent/50 text-txt-light px-2 py-1 rounded-lg z-10 pointer-events-none"
                >
                  {name}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <form
          action="https://formsubmit.co/0a98ae599e76abb23bc0dc92225ab19c"
          method="POST"
          className="bg-cards/50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-6 items-center rounded-lg p-6 h-full"
        >
          <Typography variant="p" className="text-txt-light">
            Feel free to get in touch!
          </Typography>

          <Typography
            variant="small"
            className="bg-cards/70 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-txt-light rounded-lg content-center p-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full outline-none"
              autoComplete="off"
              required
            />
          </Typography>

          <Typography
            variant="small"
            className="bg-cards/70 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-txt-light rounded-lg content-center p-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full outline-none"
              autoComplete="off"
              required
            />
          </Typography>

          <Typography
            variant="small"
            className="bg-cards/70 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-txt-light rounded-lg p-4 h-40"
          >
            <textarea
              name="message"
              placeholder="Type Your Message"
              className="size-full outline-none resize-none"
              required
            ></textarea>
          </Typography>

          <Button className="rounded-lg w-full text-txt-dark" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;

Contacts.propTypes = {
  className: PropTypes.string.isRequired,
};
