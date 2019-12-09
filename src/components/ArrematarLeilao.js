import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import useStyles from './ArrematarLeilao.styles'
import Axios from "axios";
import {Redirect} from 'react-router-dom';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const SimpleModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const auctionId = props.auctionId;
    const auctionName = props.auctionName;
    const vlClose = props.value;

    const arrematarLeilao = async (e) => {
        const a = await Axios.put(`http://localhost:3001/auction/arremate/${auctionId}`)
        const b = await Axios.post('http://localhost:3001/transaction', { auctionId, auctionName, vlClose })
        window.location.href = `/auction/${auctionId}`;
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen} className={classes.submit}>
                Arrematar Leilão
        </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                {/* <form> */}
                <div style={modalStyle} className={classes.paper}>
                    <h2>Tem certeza que deseja arrematar o leilão? Clique em confirmar.</h2>
                    <div className={classes.modalButtons}>
                        <Button variant="contained" color="secondary" onClick={handleClose} className={classes.submit2}>
                            Cancelar
                    </Button>
                        <Button variant="contained" color="primary" className={classes.submit2} onClick={arrematarLeilao} type="submit">
                            Confirmar
                    </Button>


                    </div>
                </div>
                {/* </form> */}
            </Modal>
        </div>
    );
}
export default SimpleModal