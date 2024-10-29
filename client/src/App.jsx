import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import FeaturedPaintings from "./components/FeaturedPaintings";
import OpenAuctions from "./components/OpenAuctions";  
import FeaturedArtists from "./components/FeaturedArtists";
import CustomerReviews from "./components/CustomerReviews";
import ExploreOptions from "./components/ExploreOptions";
import UserArtist from './components/UserArtist';  
import UserBuyer from './components/UserBuyer'; 
import UserArtistPublic from './components/UserArtistPublic';  
import UserBuyerPublic from './components/UserBuyerPublic';
import UploadArtwork from './components/UploadArtwork';
import ArtistArtworks from './components/ArtistArtworks';
import AuctionBidding from './components/AuctionBidding';
/*
import UserArtist from "./components/UserArtist"
import UserBuyer from "./components/UserBuyer";
import UserArtistPublic from "./components/UserArtistPublic";
import UserBuyerPublic from "./components/UserBuyerPublic";
*/
import HeroSection from "./components/HeroSection"; 
import Footer from "./components/Footer";
import { AuthProvider } from './components/AuthContext';
import './index.css';
import ViewAuctionDetails from "./components/ViewAuctionDetails";
import Auctions from "./components/Auctions";





const RareThingsPage = () => <div>Rare Things Collection</div>;
const PaintingsPage = () => <div>More Paintings Gallery</div>;
const DrawingsPage = () => <div>More Drawings</div>;
const SculpturePage = () => <div>More Sculptures</div>;
const ArtistsPage = () => <div>More Artists Details</div>;
const AuctionsPage = () => <div>More Auction Details</div>;  
const ReviewsPage = () => <div>More Reviews</div>;


function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection /> 
            <ExploreOptions />
            <OpenAuctions />  
            { /* <FeaturedArtists />
           { /*<FeaturedPaintings />*/}
           {/* <CustomerReviews /> */}
          </main>
        } />
        
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rare-things" element={<RareThingsPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/sculpture" element={<SculpturePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/public/artist/:artistID" element={<UserArtistPublic />} />  
        <Route path="/public/buyer/:buyerID" element={<UserBuyerPublic />} /> 
        <Route path="/user/artist/:artistID" element={<UserArtist/>} />  
        <Route path="/user/buyer/:buyerID" element={<UserBuyer />} /> 
        <Route path="/auctions" element={<Auctions />} />  
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/auction/:id" element={<ViewAuctionDetails />} /> 
        <Route path="/artists/:artistID/upload-artwork" element={<UploadArtwork />} />
        <Route path="/user/artists/:artistID/artworks" element={<ArtistArtworks />} />
        <Route path="/auction-bidding/:id" element={<AuctionBidding />} />
      </Routes>

      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
