import Typography from '../ui/Typography';
import ProjectsBox from '../ui/ProjectBox';
import projects from '../../lib/projects';
import AnimatedDiv from '../../utils/AnimatedDiv';

export default function Projects() {
  return (
    <AnimatedDiv>
      <section id="projects">
        <Typography variant="h2" className="text-txt-light mb-8">
          Projects
        </Typography>
        <div className="grid gap-5">
          {projects.map((item, index) => (
            <AnimatedDiv key={index}>
              <ProjectsBox
                key={index}
                image={item.image}
                projectName={item.projectName}
                description={item.description}
                techStacks={item.techStacks}
                githubLink={item.githubLink}
                websiteLink={item.webAppURL}
              />
            </AnimatedDiv>
          ))}
        </div>
      </section>
    </AnimatedDiv>
  );
}
