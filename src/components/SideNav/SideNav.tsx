import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

// assets
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';

//  cusotm styles
import useStyles from './SideNav.styles';

import SideMenuItem from './SideMenuItem';
import routesMenuItems from '../../routes/routes';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft } from '@material-ui/icons';
import clsx from 'clsx';

const SideNav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(true);
  const toggleNavigationDrawer = () => {
    setOpen(!open);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const closeNavigation = () => {
    if (matches) setOpen(false);
  };

  useEffect(() => {
    if (matches) {
      closeNavigation();
    }
  }, [matches]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            aria-label="menu"
            onClick={toggleNavigationDrawer}
            edge="start"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Typography color="inherit" component="h1" variant="h6">
            Dash
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant={matches ? 'temporary' : 'permanent'}
        open={open}
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        className={classes.drawer}
      >
        {/* Back Button */}

        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
        >
          <IconButton
            aria-label="open/close drawer"
            edge="start"
            onClick={toggleNavigationDrawer}
          >
            {open ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </div>

        <div className={classes.navLogoContainer}>
          <img
            src={open ? logo1 : logo2}
            className={classes.navLogo}
            alt="logo"
          />
        </div>
        <List className={classes.navigationList}>
          {routesMenuItems.map((k, index) => (
            <React.Fragment key={index}>
              {k.to === '/sign-out' && (
                <div className={classes.navigationSpace}>{''}</div>
              )}
              <SideMenuItem
                key={index}
                label={k.label}
                to={k.to}
                icon={k.icon}
                activeIcon={k.activeIcon}
                onClick={closeNavigation}
              />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
