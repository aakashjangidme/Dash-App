// material ui
import { Icon, ListItemIcon, ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

// react
import React, { useEffect, useState } from 'react';
// external
import clsx from 'clsx';

// interface MenuItem
import ISideMenuItem from './ISideMenuItem';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
} from 'react-router-dom';
import { Omit } from '@material-ui/types';

const useStyles = makeStyles((theme) => ({
  menuItemIcon: {
    width: '100%',
  },
  menuItem: {
    width: '80%',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuItemActive: {
    backgroundColor: '#EBEBEC',
  },
}));

const SideMenuItem = (props: ISideMenuItem) => {
  const { label, icon, activeIcon, to } = props;
  const classes = useStyles();
  const [active, setActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (to === '/sign-out') {
      setActive(true);
      return;
    }
    setActive(location.pathname === to);
  }, [location]);

  // some workaround for this shit
  const renderLink = React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  return (
    <>
      <ListItem
        button
        className={clsx(classes.menuItem, active && classes.menuItemActive)}
        component={renderLink}
      >
        <ListItemIcon>
          <Icon>
            <img
              src={active ? activeIcon : icon}
              className={classes.menuItemIcon}
              alt={label}
            />
          </Icon>
        </ListItemIcon>

        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: 'body2' }}
        />
      </ListItem>
    </>
  );
};

export default SideMenuItem;
