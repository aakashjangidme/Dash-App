import makeStyles from '@material-ui/core/styles/makeStyles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    position: 'relative',
    height: '100vh',
  },
  navLogo: {
    width: '50%',
    cursor: 'pointer',
  },
  navLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },

  navigationList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  navigationSpace: {
    flex: 1,
  },
  navigationToolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navigationToolbarCollapse: {
    justifyContent: 'center',
    paddingRight: 0,
    paddingLeft: theme.spacing(1),
  },
}));

export default useStyles;
