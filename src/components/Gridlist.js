import React, { useState, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import useStyles from './Gridlist.styles'
import { ListSubheader } from '@material-ui/core';

const AuctionGridList = () => {
  const [auctions, setAuctions] = useState([]);

    async function fetchData(){
      const res = await fetch("http://localhost:3001/auction");
      res
      .json()
      .then(res => setAuctions(res))
      .catch(err => console.warn(err.message))
      }

    useEffect(() => {
      fetchData();
  },[]);
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {auctions.map(auction => (
          <GridListTile key={auction.image}>
            <img src={auction.image} alt={auction.name} />
            <GridListTileBar
              title={auction.name}
              subtitle={<span>R${auction.value}</span>}
              actionIcon={
                <IconButton className={classes.icon} src='/Auction/${auction.id}'>
                  <AttachMoneyIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
        )}
      </GridList>
    </div>
    );

};

export default AuctionGridList;

  
