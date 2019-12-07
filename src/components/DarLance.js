import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
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

export default function SimpleModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen} className={classes.submit}>
                Dar Lance
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Faça o seu Lance!</h2>
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Valor do Lance"
                        className={classes.textField}
                    />
                    <div className={classes.modalButtons}>
                        <Button variant="contained" color="primary" onClick={handleClose} className={classes.submit2}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary" className={classes.submit2}>
                            Confirmar
                        </Button>

                    </div>
                </div>
            </Modal>
        </div>
    );
}