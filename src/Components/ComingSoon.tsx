import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  logo: {
    width: '12rem',
    height: '12rem',
  },
});

const ComingSoon = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography variant="h4"> Dash App </Typography>
        <Typography variant="subtitle1"> Coming Soon </Typography>
      </Container>
    </div>
  );
};

export default ComingSoon;
