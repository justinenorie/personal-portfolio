import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 mt-32">
      <div className="content-center">
        <Typography variant="h2" className="text-txt-light py-2">
          Hello, I'm
        </Typography>

        <Typography variant="h1" className="text-txt-light py-2">
          Justine Norie
        </Typography>

        <Typography
          variant="h2"
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-20% via-accent via-45% to-secondary to-90% animate-gradient"
        >
          Full Stack Developer
        </Typography>

        <Typography variant="p" className="text-txt-light py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis,
          velit vitae interdum aliquet, risus metus bibendum ligula, ut placerat
          metus purus non odio. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>

        <FaGithub />

        <Button className="my-2 px-10" variant="primary">
          Download my CV
        </Button>
      </div>
      <div className="flex justify-center items-center md:justify-end md:items-end">
        <img
          src="/Rectangle.svg"
          alt="sample-img"
          className="sm:w-auto sm:h-auto w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
