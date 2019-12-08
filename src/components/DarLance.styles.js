import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        height: 200,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    submit: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%'
    },
    modalButtons: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(8),
    },
    submit2: {
        width: 150,
        margin: theme.spacing(1)
      
    },
}));