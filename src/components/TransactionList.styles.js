import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
   
    root: {
      // width: '100%',
      padding: theme.spacing(2),
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: '100%',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    title: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(1),
    }
  }));