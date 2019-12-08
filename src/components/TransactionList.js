import React,{useState, useEffect} from 'react'
import axios from 'axios'

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    async function fetchData(){
        const res = await axios.get('http://localhost:3001/transactions')
    }

    return (
        <h1>Em desenvolvimento</h1>
    )
}
export default TransactionList;