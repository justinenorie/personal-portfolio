import Typography from '../ui/Typography';
import ProjectsBox from '../ui/ProjectBox';
import projects from '../../lib/projects';

export default function Projects() {
  return (
    <section id="projects">
      <Typography variant="h2" className="text-txt-light mb-8">
        Projects
      </Typography>
      <div className="grid gap-5">
        {projects.map((item, index) => (
          <ProjectsBox 
            key={index}
            image={item.image}
            projectName={item.projectName}
            description={item.description}
            techStacks={item.techStacks} 
          />
        ))}
      </div>
    </section>
  );
}
