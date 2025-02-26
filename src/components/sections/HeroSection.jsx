import Typography from "../ui/Typography"

function HeroSection() {
  return (
    <section>
      <Typography variant="h1" className="text-txt-light">HeroSection</Typography>
      <h2>Hello, I am</h2>
      <h1>Justine Norie</h1>
      <h3>Front-End Developer</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis,
        velit vitae interdum aliquet, risus metus bibendum ligula, ut placerat
        metus purus non odio. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.{" "}
      </p>
      {/* <Downloadbtn
        btn={"Download my CV"}
        className={
          "bg-primary hover:bg-secondary text-text font-bold py-2 px-4 rounded-full"
        }
      /> */}
    </section>
  );
}

export default HeroSection;
