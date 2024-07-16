import React from "react";
import FormButton from "@/app/shared/components/design-system/button.component";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import DropDown from "src/assets/icons/drop-down.svg?react";
import { useNavigate } from "@tanstack/react-router";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "@/app/core";

function NavRightDropDown() {
  const theme = useTheme();
  const auth = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (<>
    <FormButton
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      variant="icon"
      iconPos={"start"}
      icon={<DropDown/>}
    />
    <Menu
      sx={{
        padding: "10px"
      }}
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={() => {
        navigate({
          params: undefined,
          search: undefined,
          to: "/menu/profile"
        });
        handleClose();
      }}>
        <Typography variant="textsm" fontWeight={"medium"}>Profile</Typography>
      </MenuItem>
      <MenuItem onClick={() => {
        navigate({
          params: undefined,
          search: undefined,
          to: "/menu/change-password"
        });
        handleClose();
      }}>
        <Typography variant="textsm" fontWeight={"medium"}>Change password</Typography>
      </MenuItem>
      <MenuItem onClick={() => {
        navigate({
          params: undefined,
          search: undefined,
          to: "/menu/contact-us"
        });
        handleClose();
      }}>
        <Typography variant="textsm" fontWeight={"medium"}>Contact Us</Typography>
      </MenuItem>
      <Divider/>
      <MenuItem onClick={() => {
        auth.logout();
        setTimeout(() => {
          navigate({
            to: "/"
          });
        },200)

      }}>
        <Typography variant="textsm" fontWeight={"medium"} color={theme.palette.error.main}>Logout</Typography>
      </MenuItem>
    </Menu>
  </>);
}

export default NavRightDropDown;
