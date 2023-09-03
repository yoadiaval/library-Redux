import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import PropTypes from "prop-types";

//route retorna el hijo si coincide con el path que está recogiendo de lo contrario no retorna nada.
function Route({ children, path }) {
  const { currentPath } = useContext(NavigationContext);
  if (path === currentPath) {
    return children;
  }

  return null;
}

Route.propTypes = { children: PropTypes.node.isRequired };
Route.propTypes = { path: PropTypes.node.isRequired };
export default Route;
