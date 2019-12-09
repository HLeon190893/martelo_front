import React from 'react';
import AuctionBid from '../components/AuctionBid'
import Header from '../components/Header'

export default function ButtonAppBar({ match: { params: { id } } }) {
    console.log('props', id);
    return (
        <div>
            <Header />
            <AuctionBid auctionId={id}/>
        </div>

    );
}