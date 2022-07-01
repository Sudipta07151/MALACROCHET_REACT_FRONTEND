import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import FaceIcon from "@material-ui/icons/Face";
import LoginLogoutWrapper from "./LoginLogoutWrapper";
import { useNavigate } from "react-router-dom";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "black",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AvatarMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleToOrdersPage = () => {
    console.log("click");
    navigate("/yourorders");
  };
  const handleToProfilePage = () => {
    console.log("click");
    navigate("/profile");
  };
  return (
    <div>
      <FaceIcon
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        fontSize="large"
        style={{ color: "white" }}
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleToOrdersPage} style={{ dislay: "flex", alignItems: "center",justifyContent:'center' }}>
          <ListItemIcon>
            <LocalMallIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Your Orders" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleToProfilePage} style={{ dislay: "flex", alignItems: "center",justifyContent:'center' }}>
          <ListItemIcon>
            <RecentActorsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem style={{ dislay: "flex", alignItems: "center",justifyContent:'center' }}>
          <LoginLogoutWrapper />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
