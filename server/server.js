const express = require('express');
const cors = require('cors')

//router
const AuctionsRoutes = require('./routes/Auctions');
const AdminsRoutes = require('./routes/Admins');
const ArtistsRoutes = require('./routes/Artists');
const BidsRoutes = require('./routes/Bids');
const BuyersRoutes = require('./routes/Buyers');
const CartsRoutes = require('./routes/Carts');
const CatagoriesRoutes = require('./routes/Catagories');
const IndexRoutes = require('./routes/Index');
const ReviewsRoutes = require('./routes/Reviews');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/auctions', AuctionsRoutes);
app.use('/api/admins', AdminsRoutes);
app.use('/api/artists', ArtistsRoutes);
app.use('/api/bids', BidsRoutes);
app.use('/api/buyers', BuyersRoutes);
app.use('/api/carts', CartsRoutes);
app.use('/api/catagories', CatagoriesRoutes);
app.use('/api/', IndexRoutes);
app.use('/api/reviews', ReviewsRoutes );



app.get('/',(req,res)=>{
    res.send("this is main page");
})

port = 8000
app.listen(process.env.PORT||port,()=>{
    console.log(`connected to port ${port}`);
});

