import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { FaDownload } from 'react-icons/fa';
import AnimatedDiv from '../../utils/AnimatedDiv';
import Accounts from '../ui/Accounts';
import data from '../../lib/personalData';
import PropTypes from 'prop-types';

const HeroSection = ({ className }) => {
  return (
    <AnimatedDiv>
      <section
        className={`mt-32 flex flex-col-reverse gap-10 md:grid md:grid-cols-2 ${className}`}
      >
        <div className="grid content-center gap-4">
          <Typography variant="h2" className="text-txt-light">
            {"Hello, I'm"}
          </Typography>

          <Typography variant="h1" className="text-txt-light">
            Justine Norie
          </Typography>

          <Typography
            variant="h2"
            className="from-primary via-accent to-secondary animate-gradient bg-gradient-to-r from-20% via-45% to-90% bg-clip-text text-transparent"
          >
            Full Stack Developer
          </Typography>

          <Typography variant="p" className="text-txt-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            mollis, velit vitae interdum aliquet, risus metus bibendum ligula,
            ut placerat metus purus non odio. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex gap-5">
              {data.myAccounts.map(({ icon, link, name }, index) => (
                <div className="group relative" key={index}>
                  <Accounts
                    key={index}
                    Icon={icon}
                    link={link}
                    className="text-txt-light hover:text-accent h-10 w-10 transition-transform duration-300 hover:scale-120"
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
          </div>

          {/* TODO: Add the Gdrive link of my Portfolio */}
          <div>
            <Button
              className="text-txt-dark flex cursor-pointer items-center gap-2 rounded-md px-4 py-2.5 font-bold transition-transform duration-300 hover:scale-110 focus:scale-110 active:scale-110"
              variant="primary"
              type="button"
            >
              <FaDownload className="text-txt-dark" />
              Download my CV
            </Button>
          </div>

          <div>
            <Typography variant="small" className="text-txt-light">
              Looking for more?{' '}
              <a
                href="#contacts"
                className="text-accent hover:text-accent/75 hover:underline"
              >
                Visit Contacts
              </a>
            </Typography>
          </div>
        </div>
        <div className="flex content-center items-center justify-center md:items-end md:justify-end">
          <img
            src="/Rectangle.svg"
            alt="sample-img"
            className="w-full self-center sm:h-auto sm:w-auto"
          />
        </div>
      </section>
    </AnimatedDiv>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string.isRequired,
};

export default HeroSection;
