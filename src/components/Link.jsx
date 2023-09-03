import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import PropTypes from "prop-types";

function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    "text-amber-400",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} className={classes} href={to}>
      {children}
    </a>
  );
}
Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired,
};
export default Link;
