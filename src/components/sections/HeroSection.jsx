import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { FaDownload } from 'react-icons/fa';
import AnimatedDiv from '../../utils/AnimatedDiv';
import Accounts from '../ui/Accounts';
import data from '../../lib/personals';
import PropTypes from 'prop-types';

const HeroSection = ({ className }) => {
  return (
    <AnimatedDiv>
      <section
        className={`flex flex-col-reverse md:grid md:grid-cols-2 mt-32 gap-10 ${className}`}
      >
        <div className="content-center grid gap-4">
          <Typography variant="h2" className="text-txt-light">
            {"Hello, I'm"}
          </Typography>

          <Typography variant="h1" className="text-txt-light">
            Justine Norie
          </Typography>

          <Typography
            variant="h2"
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-20% via-accent via-45% to-secondary to-90% animate-gradient"
          >
            Full Stack Developer
          </Typography>

          <Typography variant="p" className="text-txt-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            mollis, velit vitae interdum aliquet, risus metus bibendum ligula,
            ut placerat metus purus non odio. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex gap-5">
              {data.myAccounts.map(({ icon, link, name }, index) => (
                <div className="relative group" key={index}>
                  <Accounts
                    key={index}
                    Icon={icon}
                    link={link}
                    className="w-10 h-10 text-txt-light hover:text-accent transition-transform hover:scale-120 duration-300"
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

          {/* TODO: Add the Gdrive link of my Portfolio */}
          <div>
            <Button
              className="px-4 flex gap-2 items-center text-txt-dark font-bold py-2.5 rounded-md transition-transform duration-300 hover:scale-110 cursor-pointer focus:scale-110 active:scale-110"
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
                className="text-accent hover:underline hover:text-accent/75"
              >
                Visit Contacts
              </a>
            </Typography>
          </div>
        </div>
        <div className="flex justify-center items-center content-center md:justify-end md:items-end">
          <img
            src="/Rectangle.svg"
            alt="sample-img"
            className="sm:w-auto sm:h-auto w-full self-center"
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
