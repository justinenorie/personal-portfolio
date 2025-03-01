import PropTypes from "prop-types";
import Typography from "./Typography";

const TechStacks = ({ Icon, techName, color }) => {
  return (
    <div className="flex rounded-lg bg-topBar p-5 gap-5 items-center shadow-md transition-transform duration-300 hover:scale-110 group">
      <Icon className="w-10 h-10 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ color }} />
      <Typography variant="p" className="text-txt-light">{techName}</Typography>
    </div>
  );
};

TechStacks.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  techName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TechStacks;
