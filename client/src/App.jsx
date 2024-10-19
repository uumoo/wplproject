import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import FeaturedPaintings from "./components/FeaturedPaintings";
import OpenAuctions from "./components/OpenAuctions";  // Import OpenAuctions
import FeaturedArtists from "./components/FeaturedArtists";
import CustomerReviews from "./components/CustomerReviews";
import ExploreOptions from "./components/ExploreOptions";
import UserArtist from './components/UserArtist';  // Import UserArtist
import UserBuyer from './components/UserBuyer'; 
import UserArtistPublic from './components/UserArtistPublic';  // Import UserArtist
import UserBuyerPublic from './components/UserBuyerPublic';
/*
import UserArtist from "./components/UserArtist"
import UserBuyer from "./components/UserBuyer";
import UserArtistPublic from "./components/UserArtistPublic";
import UserBuyerPublic from "./components/UserBuyerPublic";
*/
import HeroSection from "./components/HeroSection";  // Import HeroSection
import Footer from "./components/Footer";
import './index.css';
import ViewAuctionDetails from "./components/ViewAuctionDetails";
import Auctions from "./components/Auctions";

// Dummy components for detailed pages
const RareThingsPage = () => <div>Rare Things Collection</div>;
const PaintingsPage = () => <div>More Paintings Gallery</div>;
const DrawingsPage = () => <div>More Drawings</div>;
const SculpturePage = () => <div>More Sculptures</div>;
const ArtistsPage = () => <div>More Artists Details</div>;
const AuctionsPage = () => <div>More Auction Details</div>;  // Auctions component
const ReviewsPage = () => <div>More Reviews</div>;
//const SignIn = () => <div>Sign In</div>;


function App() {
  return (
    <Router>
      <Navbar />

      {/* Only show HeroSection on the home route */}
      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection />  {/* HeroSection only here */}
            <ExploreOptions />
            <FeaturedPaintings />
            <OpenAuctions />  {/* OpenAuctions component */}
            <FeaturedArtists />
            <CustomerReviews />
          </main>
        } />
        
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rare-things" element={<RareThingsPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/sculpture" element={<SculpturePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/public/artist/:artistID" element={<UserArtistPublic />} />  {/* Artist Profile Route */}
        <Route path="/public/buyer/:buyerID" element={<UserBuyerPublic />} /> 
        <Route path="/user/artist/:artistID" element={<UserArtist />} />  {/* Artist Profile Route */}
        <Route path="/user/buyer/:buyerID" element={<UserBuyer />} /> 
        <Route path="/auctions" element={<Auctions />} />  {/* Auction page route */}
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/auction/:id" element={<ViewAuctionDetails />} /> {/* Add this line */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
