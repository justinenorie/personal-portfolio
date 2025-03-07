import Typography from '../ui/Typography';
import ProjectsBox from '../ui/ProjectBox';
import projects from '../../lib/projects';
import AnimatedDiv from '../../utils/AnimatedDiv';
import PropTypes from 'prop-types';

const Projects = ({ className }) => {
  return (
    <AnimatedDiv>
      <section id="projects" className={className}>
        <div className="mb-8 text-center grid gap-4">
          <Typography variant="h2" className="text-txt-light">
            Projects
          </Typography>

          <Typography variant="p" className="text-txt-light">
            Here are some of the projects that I am proud to have built and
            contributed to.
          </Typography>
        </div>

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

export default Projects;

Projects.propTypes = {
  className: PropTypes.string.isRequired,
};