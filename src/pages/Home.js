import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import NestedGrid from '../components/Grid'
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
      <NestedGrid />
      {/* <TitlebarGridList /> */}
    </div>
  );
}