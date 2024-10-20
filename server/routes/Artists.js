const express = require('express');
const db = require('../db_connection/Connect_db');
const router = express.Router(); 

router.get('/user/:artistID', (req, res) => {
    
      const { artistID } = req.params;
      const query = "SELECT * FROM artist WHERE ArtistID = ?";
      db.query(query, [artistID], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
      });
});

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    
    const query = "SELECT ArtistID FROM artist WHERE Email = ? AND Password = ?";
    db.query(query, [email, password], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      
      if (result.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const artistID = result[0].ArtistID;
      res.json({ artistID }); 
    });
  });
  


router.post('/:artistID/new', (req, res) => {
    const { artistID } = req.params;
   //const {  Name, Email, ProfilePicture, Password, Bio, PortfolioURL, ApprovalStatus } = req.body;

    const Name = "Sokina";
    const Email = "sokina@example.com";
    const ProfilePicture = "";
    const Password = "abcdsddsds";
    const Bio = "a rising star";
    const PortfolioURL = "fb.com/sokina";
    const ApprovalStatus = "pending";
   
   
   const query = `
        INSERT INTO artist (ArtistID, Name, Email, ProfilePicture, Password, Bio, PortfolioURL, ApprovalStatus)
        VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [artistID, Name, Email, ProfilePicture, Password, Bio, PortfolioURL, ApprovalStatus];
    
    db.query(query, values, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Artist created successfully', result });
    });
});






  













module.exports = router;