import Typography from '../ui/Typography';
import TechStacks from '../ui/TechStacks';
import tech from '../../lib/tech';

export default function Skills() {
  return (
    <section id="stacks">
      <Typography variant="h2" className="text-txt-light mb-8">
        My Tech Stacks
      </Typography>

      <div className="grid sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap10 gap-5">
        {tech.map((item, index) => (
          <TechStacks
            key={index}
            Icon={item.icon}
            techName={item.name}
            color={item.color}
            techStyle="bg-cards p-5 gap-5 items-center shadow-md transition-transform duration-300 hover:scale-110 group"
            iconStyle="w-10 h-10 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            variant="p"
          />
        ))}
      </div>
    </section>
  );
}
