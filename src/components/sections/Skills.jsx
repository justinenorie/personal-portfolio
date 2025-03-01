import Typography from '../ui/Typography';
import TechStacks from '../ui/TechStacks';
import tech from '../../lib/tech';

export default function Skills() {
  return (
    <section>
      <Typography variant="h3" className="text-txt-light mb-8">
        My Tech Stacks
      </Typography>

      <div className="grid sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap10 gap-5">
        {tech.map((item, index) => (
          <TechStacks
            key={index}
            Icon={item.icon}
            techName={item.name}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}
