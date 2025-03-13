import Typography from '../ui/Typography';
import PropTypes from 'prop-types';
import Accounts from '../ui/Accounts';
import data from '../../lib/personalData';
import Button from '../ui/Button';
import AnimatedDiv from '../../utils/AnimatedDiv';

const Contacts = ({ className }) => {
  return (
    <section id="contacts" className={`${className} space-y-5`}>
      <div className="grid content-center items-start gap-12 md:grid-cols-2">
        <AnimatedDiv className="space-y-4">
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

          <div className="grid grid-cols-1 gap-4 min-[100rem]:grid-cols-2">
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
                  className="bg-cards hover:bg-accent/50 flex w-full items-center gap-4 rounded-lg p-4 transition-transform duration-300 hover:scale-104"
                >
                  <Accounts
                    Icon={icon}
                    link={link}
                    className="text-txt-light h-10 w-10"
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
          <div className="flex flex-wrap justify-center gap-5 pt-5 md:justify-start md:pt-0">
            {data.otherSocials.map(({ icon, link, name }, index) => (
              <div key={index} className="group relative">
                <Accounts
                  Icon={icon}
                  link={link}
                  className="text-txt-light hover:text-accent h-7 w-7 transition-transform duration-300 hover:scale-120"
                />
                <Typography
                  variant="small"
                  className="bg-accent/50 text-txt-light pointer-events-none absolute top-8 z-10 hidden rounded-lg px-2 py-1 group-hover:block"
                >
                  {name}
                </Typography>
              </div>
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <form
            action="https://formsubmit.co/0a98ae599e76abb23bc0dc92225ab19c"
            method="POST"
            className="bg-cards/50 bg-opacity-10 h-full items-center space-y-6 rounded-lg bg-clip-padding p-6 backdrop-blur-sm backdrop-filter"
          >
            <Typography variant="p" className="text-txt-light">
              Feel free to get in touch!
            </Typography>

            <Typography
              variant="small"
              className="bg-cards/70 bg-opacity-10 text-txt-light content-center rounded-lg bg-clip-padding p-4 backdrop-blur-sm backdrop-filter"
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
              className="bg-cards/70 bg-opacity-10 text-txt-light content-center rounded-lg bg-clip-padding p-4 backdrop-blur-sm backdrop-filter"
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
              className="bg-cards/70 bg-opacity-10 text-txt-light h-40 rounded-lg bg-clip-padding p-4 backdrop-blur-sm backdrop-filter"
            >
              <textarea
                name="message"
                placeholder="Type Your Message"
                className="size-full resize-none outline-none"
                required
              ></textarea>
            </Typography>

            <Button className="text-txt-dark w-full rounded-lg" type="submit">
              Send Message
            </Button>
          </form>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Contacts;

Contacts.propTypes = {
  className: PropTypes.string.isRequired,
};
