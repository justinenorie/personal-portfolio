import Typography from '../ui/Typography';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 mt-8">
      <div className="content-center">
        <Typography variant="h3" className="text-txt-light py-2">
          Hello, I'm
        </Typography>

        <Typography variant="h1" className="text-txt-light py-2">
          Justine Norie
        </Typography>

        <Typography variant="h3" className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-20% via-accent via-45% to-secondary to-90%">
          Full Stack Developer
        </Typography>

        <Typography variant="h3" className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-0% via-accent via-35% to-secondary to-75%">
          UI/UX Designer
        </Typography>

        <Typography variant="p" className="text-txt-light py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis,
          velit vitae interdum aliquet, risus metus bibendum ligula, ut placerat
          metus purus non odio. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
      </div>
      <div className="flex md:justify-end justify-center md:items-end items-center">
        <img src="/Rectangle.svg" alt="sample-img" />
      </div>
    </section>
  );
};

export default HeroSection;
