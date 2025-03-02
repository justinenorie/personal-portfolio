import PropTypes from "prop-types";
import Typography from "./Typography";

const TechStacks = ({ Icon, techName, color,  techStyle, iconStyle, variant }) => {
  return (
    <div className={`flex rounded-lg hover:cursor-default ${techStyle}`}>
      <Icon className={`${iconStyle}`} style={{ color }} />
      <Typography variant={variant} className="text-txt-light">{techName}</Typography>
    </div>
  );
};

TechStacks.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  techName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  techStyle: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default TechStacks;
