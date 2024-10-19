const express = require('express');
const db = require('../db_connection/Connect_db');
const router = express.Router(); 

router.get('/user/:buyerID', (req, res) => {
    
    const { buyerID } = req.params;
    const query = "SELECT * FROM buyer WHERE BuyerID = ?";
    db.query(query, [buyerID], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
});


router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT BuyerID FROM buyer WHERE Email = ? AND Password = ?";

    db.query(query, [email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(401).json({ message: 'Invalid credentials.' });

        const buyerID = result[0].BuyerID;
        res.json({ message: 'Sign-in successful', buyerID });  // Return buyerID to the client
    });
});



router.post('/:buyerID/new', (req, res) => {
    const { buyerID } = req.params;
    //const { Name, Email, ProfilePicture, Password, ShippingAddress, BusinessDetails, YearlyWage, ApprovalStatus } = req.body;
    const Name = "rohim";
    const Email = "rohimd@sk.com";
    const ProfilePicture = null;
    const Password = "1234dddd";
    const ShippingAddress = "enamog";
    const BusinessDetails = "successssssful";
    const YearlyWage = 10000;
    const ApprovalStatus = "approved";

    const query = `
        INSERT INTO buyer (BuyerID, Name, Email, ProfilePicture, Password, ShippingAddress, BusinessDetails, YearlyWage, ApprovalStatus)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [buyerID, Name, Email, ProfilePicture, Password, ShippingAddress, BusinessDetails, YearlyWage, ApprovalStatus];
    
    db.query(query, values, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Buyer created successfully', result });
    });
});






module.exports = router;