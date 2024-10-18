const express = require('express');
const db = require('../db_connection/Connect_db');
const router = express.Router(); 

//things to implement : api/auction/ call korle start time er agey "pending" thakbe ar pore active thakbe

router.get('/active', (req, res) => {

  const pendingCheckQuery = "SELECT AuctionID, StartTime, AuctionStatus FROM auction WHERE AuctionStatus = 'pending'";
  db.query(pendingCheckQuery, [], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.length === 0) return res.status(404).json({ message: 'No pending auctions found.' });
  
      const currentTime = new Date();
      result.forEach(auction => {
          const { AuctionID, StartTime } = auction;
          if (currentTime >= new Date(StartTime)) {
              const updateStatusQuery = "UPDATE auction SET AuctionStatus = 'active' WHERE AuctionID = ?";
              
              db.query(updateStatusQuery, [AuctionID], (err, updateResult) => {
                  if (err) return res.status(500).json({ error: err.message });
                  console.log(`AuctionID ${AuctionID} has been set to 'active'.`);
              });
          }
      });
  
  });

  
    const timeExpirationQuery = "UPDATE auction SET AuctionStatus = 'closed' WHERE EndTime < NOW()"
    db.query(timeExpirationQuery, (err, results) => {
      if (err) return res.status(500).json(err);
      const query = "SELECT * FROM auction WHERE AuctionStatus = 'active' OR AuctionStatus = 'pending'";
      db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
      });

    });

});


router.get('/active/:categoryID', (req, res) => {
  const { categoryID } = req.params;

  // Update expired auctions first
  const timeExpirationQuery = "UPDATE auction SET AuctionStatus = 'closed' WHERE EndTime < NOW()";
  db.query(timeExpirationQuery, (err, updateResults) => {
      if (err) return res.status(500).json(err);

      const query = `
          SELECT a.* 
          FROM auction a
          JOIN artwork aw ON a.ArtworkID = aw.ArtworkID
          WHERE a.AuctionStatus = 'active' 
          AND AuctionStatus = 'pending'
          AND aw.CategoryID = ?
      `;
      db.query(query, [categoryID], (err, results) => {
          if (err) return res.status(500).json(err);
          res.json(results);
      });
  });
});

    // Get auction details by AuctionID
router.get('/:auctionId', (req, res) => {

  const pendingCheckQuery = "SELECT AuctionID, StartTime, AuctionStatus FROM auction WHERE AuctionStatus = 'pending'";
  db.query(pendingCheckQuery, [], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.length === 0) return res.status(404).json({ message: 'No pending auctions found.' });
  
      const currentTime = new Date();
      result.forEach(auction => {
          const { AuctionID, StartTime } = auction;
          if (currentTime >= new Date(StartTime)) {
              const updateStatusQuery = "UPDATE auction SET AuctionStatus = 'active' WHERE AuctionID = ?";
              
              db.query(updateStatusQuery, [AuctionID], (err, updateResult) => {
                  if (err) return res.status(500).json({ error: err.message });
                  console.log(`AuctionID ${AuctionID} has been set to 'active'.`);
              });
          }
      });
  
  });
  const timeExpirationQuery = "UPDATE auction SET AuctionStatus = 'closed' WHERE EndTime < NOW()"
  db.query(timeExpirationQuery, (err, results) => {
    if (err) return res.status(500).json(err);
    const { auctionId } = req.params;
    const query = "SELECT * FROM auction WHERE AuctionID = ?";
    db.query(query, [auctionId], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  });
}); 
  // add a new bid 
  router.post('/:auctionId/bid', (req, res) => {

    const pendingCheckQuery = "SELECT AuctionID, StartTime, AuctionStatus FROM auction WHERE AuctionStatus = 'pending'";
    db.query(pendingCheckQuery, [], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'No pending auctions found.' });
    
        const currentTime = new Date();
        result.forEach(auction => {
            const { AuctionID, StartTime } = auction;
            if (currentTime >= new Date(StartTime)) {
                const updateStatusQuery = "UPDATE auction SET AuctionStatus = 'active' WHERE AuctionID = ?";
                
                db.query(updateStatusQuery, [AuctionID], (err, updateResult) => {
                    if (err) return res.status(500).json({ error: err.message });
                    console.log(`AuctionID ${AuctionID} has been set to 'active' from bid.`);
                });
            }
        });
    
    });
  

    const { auctionId } = req.params;
    //const { BuyerID, BidAmount } = req.body;
    //const auctionId = 1; // Example auction ID
    const buyerId = 2;   
    const newBidAmount = 700000; 
    const auctionStatusQuery = 'SELECT EndTime, AuctionStatus FROM auction WHERE AuctionID = ?';
    db.query(auctionStatusQuery, [auctionId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Auction not found.' });

        const { EndTime, AuctionStatus} = result[0];
        const currentTime = new Date();
        if(AuctionStatus == 'pending'){
          return res.status(400).json({ message: 'Auction is not online.' });
        }
        else{
          if (currentTime > EndTime || AuctionStatus == 'closed') {        
            newAucStatQuery = 'UPDATE auction set AuctionStatus = ? where AuctionID = ?;'
            db.query(newAucStatQuery,["closed",auctionId],(err,result)=>{
              if(err) return res.status(500).json(err);
              return res.status(400).json({ message: 'Auction is closed. No more bids allowed.' });

            })   
            
          }
          const StartingBidQuery = 'SELECT StartingBid AS sb FROM auction where AuctionID = ?';
          db.query(StartingBidQuery,[auctionId],(err,result) =>{
            if (err) return res.status(500).json(err);
            const StartingBid = result[0].sb;
            
            if(newBidAmount>StartingBid){
                // check the current maximum bid for the auction
                const maxBidQuery = 'SELECT MAX(BidAmount) AS maxBidAmount FROM bid WHERE AuctionID = ?';
            
                db.query(maxBidQuery, [auctionId], (err, result) => {
                    if (err) throw err;
        
                    const maxBidAmount = result[0].maxBidAmount || 0; 
                    console.log(maxBidAmount)
                    // check if new bid is higher than the current max bid
                    if (newBidAmount > maxBidAmount) {
                        // insert the new bid
                        const insertBidQuery = 'INSERT INTO bid (AuctionID, BuyerID, BidAmount, BidTime) VALUES (?, ?, ?, NOW())';
                        db.query(insertBidQuery, [auctionId, buyerId, newBidAmount], (err, result) => {
                            if (err) throw err;
                            console.log('New bid inserted successfully.');
                            const updateAuctionQuery = 'UPDATE auction SET HighestBid = ?, WinnerID = ? WHERE AuctionID = ?';
                            db.query(updateAuctionQuery, [newBidAmount, buyerId, auctionId], (err, result) => {
                                if (err) return res.status(500).json({ error: err.message });
                                
                                console.log('Auction table updated with new highest bid and winner.');
                                console.log('Bid placed successfully and auction updated.');
                            });
                        });
                    } else {
                        console.log('Bid amount is too low.');
                        res.status(201).json({ message: 'Bid amount is too low.' });
                    }
                });
            }
            else{
              console.log('lower than starting bid.');
              res.status(201).json({ message: 'lower than starting bid.' });
            }                   

          }); 

        }
           

    });

});

  // Create a new auction
  router.post('/:artworkID/new', (req, res) => {
    const { artworkID } = req.params;
    AuctionStatus = 'active';
   // const {  StartTime, EndTime,StartingBid } = req.body;
     StartTime = '2024-10-15 04:59:24';
     EndTime = '2024-10-15 05:39:24';
     StartingBid = 222;
     
    const query = 'INSERT INTO auction (ArtworkID, StartTime, EndTime,StartingBid,AuctionStatus) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [artworkID, StartTime, EndTime,StartingBid,AuctionStatus], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ auctionId: result.insertId });
    });
  });



module.exports = router;