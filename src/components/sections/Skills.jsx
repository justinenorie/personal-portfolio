import Typography from '../ui/Typography';
import TechStacks from '../ui/TechStacks';
import tech from '../../lib/tech';
import AnimatedDiv from '../../utils/AnimatedDiv';

export default function Skills() {
  return (
    <section id="stacks">
      <AnimatedDiv>
        <div className="mb-8 text-center grid gap-4">
          <Typography variant="h2" className="text-txt-light">
            My Tech Stacks
          </Typography>

          <Typography variant="p" className="text-txt-light">Here are the tech stacks that I have used, have knowledge about, and have experience with.</Typography>
        </div>

        <div className="grid sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap10 gap-5">
          {tech.map((item, index) => (
            <AnimatedDiv key={index}>
              <TechStacks
                key={index}
                Icon={item.icon}
                techName={item.name}
                color={item.color}
                techStyle="bg-cards p-5 gap-5 items-center shadow-md transition-transform duration-300 hover:scale-110 group"
                iconStyle="w-10 h-10 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                variant="p"
              />
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>
    </section>
  );
}
