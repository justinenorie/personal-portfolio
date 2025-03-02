import PropTypes from 'prop-types';
import Typography from './Typography';
import TechStacks from './TechStacks';
import techList from '../../lib/tech';

const ProjectBox = ({ image, projectName, description, techStacks }) => {
  const matchedTechStacks = techStacks
    .map((tech) =>
      techList.find((t) => t.name.toLowerCase() === tech.toLowerCase())
    )
    .filter(Boolean); // Remove undefined values (if no match)

  return (
    <div className="grid grid-cols-2 gap-10 border-2 border-txt-light p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-80 object-cover rounded-md"
        src={image || '/Rectangle.svg'}
        alt={projectName}
      />

      <div className="content-center grid gap-5 hover:cursor-default">
        <Typography variant="h3" className="text-txt-light">
          {projectName || 'Project Name'}
        </Typography>
        <Typography variant="p" className="text-txt-light">
          {description || 'Description'}
        </Typography>

        <div className="flex gap-2 mt-2">
          {matchedTechStacks.map((tech, index) => (
            <TechStacks
              key={index}
              Icon={tech.icon}
              techName={tech.name}
              color={tech.color}
              techStyle="h-10 w-auto p-2 bg-gray-800 rounded-md flex items-center gap-2 transition-transform duration-300 hover:scale-110 group"
              iconStyle="h-6 w-6 text-2xl transition-transform duration-300 group-hover:rotate-12"
              variant="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectBox.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStacks: PropTypes.array.isRequired,
};

export default ProjectBox;
