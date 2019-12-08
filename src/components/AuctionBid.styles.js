import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        marginTop: theme.spacing(16),
        width: 400,
        height: 500,
        // backgroundColor: 'cyan',
        margin: theme.spacing(2),
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
    },
    containerIMG: {
        marginTop: theme.spacing(16),
        width: 600,
        height: 500,
        // backgroundColor: 'cyan',
        margin: theme.spacing(2),
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        margin: theme.spacing(2),
    },
    submit: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%'
    },
    bid: {
        width: 400,
        justifyContent: 'space-around',
        marginTop: theme.spacing(5),
    },
    image: {
        width:600,
        height:500,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    textArea: {
        resize: 'vertical'
    },
}));