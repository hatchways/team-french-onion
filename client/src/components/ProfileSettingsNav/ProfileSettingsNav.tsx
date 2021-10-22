import React from 'react';
import { MenuList, MenuItem, Box, Grid } from '@material-ui/core';
import { useRouteMatch, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import EditProfileForm from '../EditProfile/EditProfileForm';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import Availability from '../Availability/Availability';

const navItems = [
  { id: 'details', title: 'Edit profile', component: EditProfileForm },
  { id: 'photo', title: 'Profile Photo', component: ProfilePhoto },
  { id: 'availability', title: 'Availability', component: Availability },
  { id: 'payment', title: 'Payment', component: EditProfileForm },
  { id: 'all', title: 'Settings', component: ProfilePhoto },
];

const ProfileSettings: React.FC = (): JSX.Element => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Box width={1000} margin={'auto'} marginTop={5}>
        <Grid container spacing={2}>
          <MenuList>
            {navItems.map(({ id, title }) => (
              <MenuItem
                key={title}
                style={{ fontSize: 21 }}
                aria-current={id === 'details' ? 'true' : undefined}
                component={NavLink}
                to={`${url}/${id}`}
              >
                {title}
              </MenuItem>
            ))}
          </MenuList>
          {/*loads edit profile page on first visit*/}
          <Redirect to={`${path}/details`} />
          <Switch>
            {navItems.map(({ id, component }) => (
              <Route key={id} path={`${path}/${id}`} component={component} />
            ))}
          </Switch>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileSettings;
