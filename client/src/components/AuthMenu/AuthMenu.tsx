import { useState, MouseEvent } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/useAuthContext';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { deepOrange } from '@mui/material/colors';
import useStyles from './useStyles';

const AuthMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();
  const { loggedInUser } = useAuth();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const { avatarWrapper } = useStyles();

  return (
    <Box className={avatarWrapper}>
      <Avatar
        sx={{ bgcolor: deepOrange[400], width: 56, height: 56 }}
        aria-label="show auth menu"
        aria-controls="auth-menu"
        aria-haspopup="true"
        onClick={handleClick}
        alt="logged in user"
        src={`https://robohash.org/${loggedInUser?.email}.png`}
      />
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem component={Link} to="/profile">
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AuthMenu;
