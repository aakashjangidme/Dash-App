import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Typography, IconButton } from '@material-ui/core';

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
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Drawer
        anchor="left"
        variant="permanent"
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
            onClick={toggleDrawer}
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
              />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
