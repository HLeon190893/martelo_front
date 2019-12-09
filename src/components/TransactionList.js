import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './TransactionList.styles'
import { Typography } from '@material-ui/core';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    async function fetchData() {
        const res = await fetch("http://localhost:3001/transaction");
        res
            .json()
            .then(res => setTransactions(res))
            .catch(err => console.warn(err.message))
    }

    useEffect(() => {
        fetchData();
    }, []);


    const classes = useStyles();

    return (


        <div className={classes.root}>
            
            <Typography variant="h4" component="h2" alingn="right">
                Tabela de Transações
            </Typography>

            <Paper className={classes.paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID do Leilão</TableCell>
                            <TableCell align="right">Nome do Produto</TableCell>
                            <TableCell align="right">Valor da Transação</TableCell>
                            <TableCell align="right">Data da Transação</TableCell>
                            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map(transaction => (
                            <TableRow key={transaction.auctionId}>
                                <TableCell component="th" scope="row">
                                    {transaction.auctionId}
                                </TableCell>
                                <TableCell align="right">{transaction.auctionName}</TableCell>
                                <TableCell align="right">{transaction.vlClose}</TableCell>
                                <TableCell align="right">{transaction.dtExecution}</TableCell>
                                {/* <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}
export default TransactionList;