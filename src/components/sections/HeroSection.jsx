import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { FaDownload } from 'react-icons/fa';
import AnimatedDiv from '../../utils/AnimatedDiv';
import Accounts from '../ui/Accounts';
import data from '../../lib/personals';

const HeroSection = () => {
  return (
    <AnimatedDiv>
      <section className="flex flex-col-reverse md:grid md:grid-cols-2 mt-32 gap-10">
        <div className="content-center">
          <Typography variant="h2" className="text-txt-light">
            Hello, I'm
          </Typography>

          <Typography variant="h1" className="text-txt-light py-4">
            Justine Norie
          </Typography>

          <Typography
            variant="h2"
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-20% via-accent via-45% to-secondary to-90% animate-gradient"
          >
            Full Stack Developer
          </Typography>

          <Typography variant="p" className="text-txt-light py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            mollis, velit vitae interdum aliquet, risus metus bibendum ligula,
            ut placerat metus purus non odio. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>

          <div className="flex gap-5">
            {data.myAccounts.map(({ icon, link }, index) => (
              <Accounts key={index} Icon={icon} link={link} />
            ))}
          </div>

          <Button
            className="my-4 px-4 flex gap-2 items-center text-txt-dark"
            variant="primary"
          >
            <FaDownload className="text-txt-dark" />
            Download my CV
          </Button>
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

export default HeroSection;
