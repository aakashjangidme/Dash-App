import CssBaseline from '@material-ui/core/CssBaseline';
import SideNav from './components/SideNav/SideNav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appbarSpacer: {
    [theme.breakpoints.down('xs')]: {
      ...theme.mixins.toolbar,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <SideNav />
        <div>
          <div className={classes.appbarSpacer}> </div>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  exact
                  key={index}
                  path={route.to}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
