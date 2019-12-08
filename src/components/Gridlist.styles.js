import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
          marginTop: '25px'
        },
        gridList: {
          width: 800,
          height: 550,
        },
        icon: {
          color: 'rgba(255, 255, 255, 0.54)',
        },
      }));