import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import PropTypes from "prop-types";

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div>
      {icon === "view_list" ? (
        <ViewListIcon
          fontSize="large"
          onClick={() => onSwitch("view_module")}
        />
      ) : (
        <ViewModuleIcon
          fontSize="large"
          onClick={() => onSwitch("view_list")}
        />
      )}
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
