import React, { useState, useEffect } from "react"
import useStyles from "./AuctionBid.styles";
import TextField from '@material-ui/core/TextField';
import DarLance from '../components/DarLance'
import ArrematarLeilao from '../components/ArrematarLeilao'
import { TextareaAutosize } from "@material-ui/core";

const AuctionBid = ({ auctionId }) => {
    const [auctions, setAuctions] = useState({});

    async function fetchData() {
        const res = await fetch(`http://localhost:3001/auction/${auctionId}`)
        res
            .json()
            .then(res => setAuctions(res))
            .catch(err => console.warn(err.message))
    }

    useEffect(() => {
        fetchData();
    }, []);

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <div className={classes.containerIMG}>
                <img src={auctions.image} alt={auctions.name} className={classes.image} />
            </div>
            {/* {auctions.map(auction => ( */}
            <div className={classes.container}>
                Nome
            <TextField
                    disabled
                    id="outlined-disabled"
                    className={classes.textField}
                    value={auctions.name}
                />
                <br />
                Data de Encerramento
            <TextField
                    disabled
                    id="outlined-disabled"
                    className={classes.textField}
                    value={auctions.finalDate}
                />
                <br />
                Valor do Lance Atual (R$)
            <TextField
                    disabled
                    id="outlined-disabled"
                    className={classes.textField}
                    value={auctions.value}
                />
                <br />
                Valor de Arremate (R$)
            <TextField
                    disabled
                    id="outlined-disabled"
                    className={classes.textField}
                    value={auctions.capValue}
                />
                <br />
                Descrição do Produto
            <TextareaAutosize
                    disabled name="description"
                    id="outlined-disabled"
                    className={classes.textArea}
                    value={auctions.description}
                />


                <div className={classes.bid}>
                    <DarLance auctionId={auctions._id} auctionName={auctions.name}/>
                    <br />
                    <ArrematarLeilao auctionId={auctions._id} auctionName={auctions.name} value={auctions.capValue} />
                </div>
            </div>
            {/* ))}; */}
            {/* {JSON.stringify(auctions)} */}
        </div>
    );

}
export default AuctionBid;