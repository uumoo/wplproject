const express = require('express');
const db = require('../db_connection/Connect_db');
const router = express.Router(); 

router.get('/',(req,res)=>{
    res.send("ADMIN")
})

module.exports = router;