import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import TitlebarGridList from '../components/Gridlist'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <TitlebarGridList />
    </div>
  );
}